import { CommonModule } from "@angular/common";
import { Component, Input, inject } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { from } from "rxjs";
import { ReadFilesService } from "../../../../../services/readFile-single/read-files.service";
import { HttpServiceService } from "../../../../../services/global-http/http-service.service";
import { UploadStatusService } from "../../../../../services/readFile-single/upload-status/upload-status.service";
import { InnerThirdSectionComponent } from "./inner-third-section/inner-third-section.component";

@Component({
  selector: "app-writing-third-section",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InnerThirdSectionComponent],
  templateUrl: "./writing-third-section.component.html",
  styleUrl: "./writing-third-section.component.css",
})
export class WritingThirdSectionComponent {
  @Input() form!: FormGroup;
  fileReadingService = inject(ReadFilesService);
  httpService = inject(HttpServiceService);

  get steps() {
    return this.form.get("steps") as FormArray;
  }
 
  addSteps() {
    this.steps.push(
      new FormGroup({
        heading: new FormControl(""),
        about: new FormControl(""),
        imageUrl: new FormControl(""),
      }),
    );
  }
}
