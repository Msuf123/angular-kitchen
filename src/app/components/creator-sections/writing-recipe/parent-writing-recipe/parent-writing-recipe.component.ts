import { Component, ViewEncapsulation, inject } from "@angular/core";
import { WritingTopBarComponent } from "./writing-top-bar/writing-top-bar.component";
import { WritingFirstSectionComponent } from "./writing-first-section/writing-first-section.component";
import { WritingSecondSectionComponent } from "./writing-second-section/writing-second-section.component";
import { WritingThirdSectionComponent } from "./writing-third-section/writing-third-section.component";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { HttpServiceService } from "../../../../services/global-http/http-service.service";
import { FormGeneratorServiceService } from "../../../../services/creator-sections/writing-recipe/form-generator-service.service";
import { CommonModule } from "@angular/common";
import { LoadingService } from "../../../../services/loading/loading.service";
import { SignInMsgComponent } from "../../../authentication/sign-in-msg/sign-in-msg.component";
import { SaveChangesService } from "../../../../services/creator-sections/should-save-changes/save-changes.service";
import { DisplaySaveDraftComponent } from "../../display-save-draft/display-save-draft.component";
import { DisplayMessageService } from "../../../../services/creator-sections/display-save-draft/display-message.service";
import { BehaviorSubject, Subject } from "rxjs";
import { ErrorImageComponent } from "../../error-image/error-image.component";
import { ErrorImageService } from "../../../../services/error-image-upload/error-image.service";
import { SessionExpiredComponent } from "../../session-expired/session-expired.component";
import { SessionsService } from "../../../../services/creator-sections/session-error/sessions.service";
import { FormsInvalidService } from "../../../../services/creator-sections/error-in-forms/forms-invalid.service";
import { MissingParameterComponent } from "../../missing-parameter/missing-parameter.component";
import { ActivatedRoute, Router } from "@angular/router";
import { FinalResponse } from "./interfaces/respose-of-server-draft";
@Component({
  selector: "app-parent-writing-recipe",
  standalone: true,
  imports: [
    WritingTopBarComponent,
    DisplaySaveDraftComponent,
    CommonModule,
    WritingFirstSectionComponent,
    WritingSecondSectionComponent,
    WritingThirdSectionComponent,
    ReactiveFormsModule,
    SignInMsgComponent,
    ErrorImageComponent,
    SessionExpiredComponent,
    MissingParameterComponent,
  ],
  templateUrl: "./parent-writing-recipe.component.html",
  styleUrl: "./parent-writing-recipe.component.css",
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ParentWritingRecipeComponent {
  form: FormGroup;
  listOfQuestioins;
  signedIn = false;
  http=inject(HttpServiceService)
  freeToUpload = inject(FormsInvalidService);
  loadingService = inject(LoadingService);
  canDeactivateS = inject(SaveChangesService);
  showDisplay = inject(DisplayMessageService);
  showError = inject(ErrorImageService);
  sessionService = inject(SessionsService);
  router=inject(ActivatedRoute)
  sessionError = this.sessionService.sessionError.value;
  isThereError = this.showError.displayErrorService.value;
  showMsg = false;
  counter = 0;
  shouldUploadError = false;
  id=""
  editorMode=false
  shouldDeactivate = new Subject<boolean>();
  constructor(
    private questions: HttpServiceService,
    private formService: FormGeneratorServiceService,
  ) {
    
    questions.get("/write/auth").subscribe((res) => {
      this.router.url.subscribe((a:any)=>{
        for(let i of a){
         for(let j in i){
          if(i[j]==='edit'){
            console.log("edit mode")
            this.editorMode=true
          }
         }
        }
        if(this.editorMode){
          this.router.params.subscribe((a)=>{
            this.id=a['id']
            this.http.get('/account/draft/saved-draft/info/'+this.id).subscribe((res)=>{
              if(typeof res!=="string"){
                let responseFromServer=res as FinalResponse
                let ingredients=responseFromServer[1]
                let ingredientFom=this.form.get('ingridents') as FormArray
                ingredientFom.clear()
                while(ingredientFom.length<ingredients.length){
                  ingredientFom.push(new FormControl(''))
                }
                let steps=responseFromServer[2]
                let stepsForm=this.form.get('steps') as FormArray
                stepsForm.clear()
                while(stepsForm.length<steps.length){
                  stepsForm.push( new FormGroup({
                    heading: new FormControl("", { validators: [Validators.required] }),
                    about: new FormControl("", { validators: [Validators.required] }),
                    imageUrl: new FormControl(""),
                  }))
              }
              console.log(responseFromServer[2])
              this.form.patchValue({...responseFromServer[0][0],ingredients:responseFromServer[1],steps:responseFromServer[2]})
              this.form.get('steps')?.patchValue(responseFromServer[2])
            }
            })
          })
          
        }
      })
   
      // res === "okay"
      if (res === "okay") {
        this.signedIn = true;
      }
    });
     
    this.freeToUpload.errorsWhileUploading.subscribe((state) => {
      this.shouldUploadError = state;
    });
    this.sessionService.sessionError.subscribe((state) => {
      this.sessionError = state;
    });
    this.listOfQuestioins = this.questions.question();
    this.form = formService.getFormObject(this.listOfQuestioins);
    this.form.valueChanges.subscribe((a) => {
      if (this.counter === 0) {
        this.canDeactivateS.saveCahnges.next(true);

        this.counter++;
      }
    });
    this.form.getError("number");
    this.showDisplay.shouldDisplay.subscribe((state) => {
      this.showMsg = state;
    });
    this.showError.displayErrorService.subscribe((errorState) => {
      this.isThereError = errorState;
    });

    this.form.get("priceOfMeal")?.setValidators([
      Validators.required,
      (constrol: AbstractControl): ValidationErrors | null => {
        if (Number.isNaN(Number(constrol.value))) {
          return { number: "yes" };
        } else {
          return null;
        }
      },
    ]);
    this.form.get("time")?.setValidators([
      Validators.required,
      (constrol: AbstractControl): ValidationErrors | null => {
        if (Number.isNaN(Number(constrol.value))) {
          return { number: "yes" };
        } else {
          return null;
        }
      },
    ]);
    this.form.updateValueAndValidity();
    this.form.valueChanges.subscribe((a)=>{
      console.log(a)
    })
    

  }





  submitForm(e: any) {
    let eventEmitter = e.submitter;
    if (eventEmitter.value === "Publish") {
      console.log(this.form.value);
    }
  }
  click(){
    
    
   
    
  }
  canDeactivate() {
    if (this.counter === 0) {
      return true;
    }

    this.showMsg = true;
    console.log("Calling can dev");
    return this.shouldDeactivate;
  }
}
