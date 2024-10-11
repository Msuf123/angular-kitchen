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
import { FinalResponse, ingredient } from "./interfaces/respose-of-server-draft";
import { ErrorDraftReicpeComponent } from "../../error-draft-reicpe/error-draft-reicpe.component";
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
    ErrorDraftReicpeComponent
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
  routes=inject(Router)
  sessionError = this.sessionService.sessionError.value;
  isThereError = this.showError.displayErrorService.value;
  showMsg = false;
  counter = 0;
  shouldUploadError = false;
  id=""
  editorMode=false
  shouldDeactivate = new Subject<boolean>();
  errorInDraftRecipe=new BehaviorSubject<boolean>(false)
  errorDraftId=false
  constructor(
    private questions: HttpServiceService,
    private formService: FormGeneratorServiceService,
  ) {
    
    questions.get("/write/auth").subscribe((res) => {
      if(res==="Unable to reach to server"){
        this.routes.navigate(["/"])
      }
      this.router.url.subscribe((a:any)=>{
        for(let i of a){
         for(let j in i){
          if(i[j]==='edit'){
            
            formService.editMode.next(true)
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
                console.log(responseFromServer)
                let ingredients=responseFromServer[1]
                let ingredientFom=this.form.get('ingridents') as FormArray
                let ingreidnetsToPush:string[]=[]
                ingredientFom.clear()
                
                for(let item of ingredients){
                  
                  ingredientFom.push(new FormControl(''))
                  ingreidnetsToPush.push(item.name)
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
              let stepsObjTopatch=[]
              let ob=responseFromServer[2]
              for(let i of ob){
               
                let objs={order_of_step:i.order_of_step,heading:i.name,about:i.description,imageUrl:i.image_url}
                stepsObjTopatch.push(objs)
              }
              this.form.patchValue({...responseFromServer[0][0],priceOfMeal:responseFromServer[0][0].price,time:responseFromServer[0][0].time_to_cook,image:responseFromServer[0][0].image_url,ingridents:ingreidnetsToPush,steps:stepsObjTopatch})
              this.errorInDraftRecipe.next(false)
            }
            else{
              this.errorInDraftRecipe.next(true)
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
      
      if (this.counter !== 0) {
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

    this.errorInDraftRecipe.subscribe((currentState)=>{
      this.errorDraftId=currentState
    })
     this.form.valueChanges.subscribe((state)=>{
      console.log("hi i am in pramnt",state)
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

  onKeydown(event: KeyboardEvent) {
    
    if (event.key === 'Enter') {
     
      event.preventDefault();
    }
  }

  canDeactivate() {
    if (this.counter === 0) {
      return true;
    }
    this.showMsg = true;
   
    return this.shouldDeactivate;
  }
}
