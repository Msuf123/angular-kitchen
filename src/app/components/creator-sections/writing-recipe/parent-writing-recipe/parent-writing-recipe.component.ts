import { Component, ViewEncapsulation, inject } from "@angular/core";
import { WritingTopBarComponent } from "./writing-top-bar/writing-top-bar.component";
import { WritingFirstSectionComponent } from "./writing-first-section/writing-first-section.component";
import { WritingSecondSectionComponent } from "./writing-second-section/writing-second-section.component";
import { WritingThirdSectionComponent } from "./writing-third-section/writing-third-section.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
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
  ],
  templateUrl: "./parent-writing-recipe.component.html",
  styleUrl: "./parent-writing-recipe.component.css",
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ParentWritingRecipeComponent {
  form: FormGroup;
  listOfQuestioins;
  signedIn = false;
  loadingService = inject(LoadingService);
  canDeactivateS = inject(SaveChangesService);
  showDisplay = inject(DisplayMessageService);
  showError = inject(ErrorImageService);
  sessionService = inject(SessionsService);
  sessionError = this.sessionService.sessionError.value;
  isThereError = this.showError.displayErrorService.value;
  showMsg = false;
  counter = 0;
  shouldDeactivate = new Subject<boolean>();
  constructor(
    private questions: HttpServiceService,
    private formService: FormGeneratorServiceService,
  ) {
    questions.get("/write/auth").subscribe((res) => {
      console.log(res);
      res === "okay";
      if (res === "okay") {
        this.signedIn = true;
      }
    });
    this.sessionService.sessionError.subscribe((state) => {
      this.sessionError = state;
    });
    this.listOfQuestioins = this.questions.question();
    this.form = formService.getFormObject(this.listOfQuestioins);
    this.form.valueChanges.subscribe((a) => {
      console.log(a);
      if (this.counter === 0) {
        this.canDeactivateS.saveCahnges.next(true);
        console.log("Made changes");
        this.counter++;
      }
    });
    this.showDisplay.shouldDisplay.subscribe((state) => {
      this.showMsg = state;
    });
    this.showError.displayErrorService.subscribe((errorState) => {
      this.isThereError = errorState;
    });
  }
  submitForm(e: any) {
    let eventEmitter = e.submitter;
    if (eventEmitter.value === "Publish") {
      console.log(this.form.value);
    }
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
