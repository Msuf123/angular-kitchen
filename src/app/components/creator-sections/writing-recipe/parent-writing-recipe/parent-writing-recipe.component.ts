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
          }
         }
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
    let ingridents=['Psata','Mleo']
    let steps=[{ heading: "Boil", about: "cdc", imageUrl: "" },
      { heading: "Eat", about: "df", imageUrl: "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" }
   ]
    let a=this.form.get('ingridents') as FormArray
    a.clear()
    console.log(a.length,ingridents.length)
    while(a.length<ingridents.length){
      a.push(new FormControl('k'))
    }
    let b=this.form.get('steps') as FormArray
    b.clear()
    while(b.length<steps.length){
      b.push( new FormGroup({
        heading: new FormControl("", { validators: [Validators.required] }),
        about: new FormControl("", { validators: [Validators.required] }),
        imageUrl: new FormControl(""),
      }))
    }
    this.form.get('ingridents')?.patchValue(['Pastda','Olive Oil'])
    this.form.get('steps')?.patchValue([{ heading: "Boil", about: "cdc", imageUrl: "" },
      { heading: "Eat", about: "df", imageUrl: "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" }
    ])
    console.log()
    this.form.patchValue({name:'k',healyLevel:2,priceOfMeal:12,time:3,description:"hi",
      difficlutyLEvel:3,
      image:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
      
    })
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
