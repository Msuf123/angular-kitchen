import { Component, Injector, Input, inject } from "@angular/core";
import { FormArray, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UploadStatusService } from "../../../../../../services/readFile-single/upload-status/upload-status.service";
import { CommonModule } from "@angular/common";
import { ReadFilesService } from "../../../../../../services/readFile-single/read-files.service";
import { HttpServiceService } from "../../../../../../services/global-http/http-service.service";
import { url } from "../../../../../../app.config";

@Component({
  selector: "app-inner-third-section",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./inner-third-section.component.html",
  styleUrl: "./inner-third-section.component.css",
})
export class InnerThirdSectionComponent {
  fileReadingService = inject(ReadFilesService);
  @Input() formArray!: any;
  @Input() postion!: number;
  httpService = inject(HttpServiceService);
  status = inject(UploadStatusService);
  progress = this.status.progressStatus.value.status;
  @Input() form!: FormGroup;
  showProgress = this.status.displayStatus.value;
  uploadedImageFromHere = false;
  fileDataUrl = "";
  injector = inject(Injector);
  urls = this.injector.get(url);
  imageThere = false;
  constructor() {
    this.status.displayStatus.subscribe((display) => {
      if (!this.imageThere) {
        this.showProgress = display;
      } else {
        this.showProgress = false;
      }
    });

    this.status.progressStatus.subscribe((status) => {
      if (status.name !== "error") {
        if (
          status.name !== "" &&
          this.steps.at(this.postion).get("imageUrl")?.value === "" &&
          this.uploadedImageFromHere
        ) {
          this.steps.at(this.postion).get("imageUrl")?.setValue(status.name);
          this.imageThere = true;
        } else {
          this.progress = status.status;
        }
      } else {
        this.fileDataUrl = "";
        this.showProgress = false;
        this.imageThere = false;
        this.uploadedImageFromHere = false;
      }
    });
  }
  async fileUploaded(evnet: any) {
    this.uploadedImageFromHere = true;
    const target = evnet.target as HTMLInputElement;
    const filesExtension = (evnet.target.files[0].type as string).split("/")[1];
    const res = await this.fileReadingService.readFile(target);
    this.fileDataUrl = res as string;
    const buffer = (await this.fileReadingService.readBuffer(
      target,
    )) as ArrayBuffer;
    this.httpService.uploadImageToServer(
      buffer,
      `${this.urls}/write/upload-image`,
      filesExtension,
    );
  }
  get steps() {
    return this.form.get("steps") as FormArray;
  }
  deleteImage() {
    this.imageThere = false;
    this.fileDataUrl = "";
  }
  run(e: string) {
    console.log(e);
  }
}
