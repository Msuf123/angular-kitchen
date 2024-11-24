import { CommonModule } from "@angular/common";
import { CSP_NONCE, Component, DoCheck, Injector, Input, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import BaseQuestion from "../../../../custom-class/questions-class/creator-write-sec/base.question";
import { ReadFilesService } from "../../../../services/readFile-single/read-files.service";
import { HttpServiceService } from "../../../../services/global-http/http-service.service";
import { UploadStatusService } from "../../../../services/readFile-single/upload-status/upload-status.service";
import { url } from "../../../../app.config";
import { NgClass } from "@angular/common";
import { BehaviorSubject } from "rxjs";
@Component({
  selector: "app-individual-input-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./individual-input-form.component.html",
  styleUrl: "./individual-input-form.component.css",
})
export class IndividualInputFormComponent implements DoCheck{
  injector = inject(Injector);
  urls = this.injector.get(url);
  filereaderService = inject(ReadFilesService);
  httpService = inject(HttpServiceService);
  status = inject(UploadStatusService);
  imageThere = false;
  @Input() formGroup!: FormGroup;
  @Input() question!: BaseQuestion;
  showProgress = false;
  progress = this.status.progressStatus.value.status;
  errors: boolean = false;
  url!: string;
  uploadedImageFromHere = false;
  classes = "";
  disableDeletOptionUpper


  constructor() {
  this.disableDeletOptionUpper=false
  }
  ngDoCheck(): void {
    if(this.question.type==='file'){
    console.log(this.disableDeletOptionUpper,'Current state of Deleteing',this.question.lable)}
  }

  ngAfterViewInit() {
    this.formGroup.valueChanges.subscribe((currentState)=>{
      if(currentState.image!==""){
        this.url=currentState.image as string
        this.showProgress=false
        this.uploadedImageFromHere=true
        this.disableDeletOptionUpper=false
      }
      
    })
    this.status.progressStatus.subscribe((status) => {
      //inner thrid section componet have the code that sets the error of while uplaoing image
      if(this.formGroup.get('image')?.value===""){
      if (status.name !== "error") {
        if (!this.imageThere) {
          
          
          if (status.status < 100) {
            this.showProgress = true;
            this.disableDeletOptionUpper=true
            this.progress=status.status
            
          } else if (status.status === 100 && this.uploadedImageFromHere) {
            let name = this.status.progressStatus.value.name;
            this.imageThere = true;
            this.showProgress = false;
            this.uploadedImageFromHere = false;
            this.disableDeletOptionUpper=false
            console.log("enabling delete option",this.disableDeletOptionUpper)
            this.status.progressStatus.next({ name: "", status: 0 });

            this.formGroup.get("image")?.setValue(status.name);
            
          }
        }
      } else {
        this.uploadedImageFromHere = false;
        this.url = "";
        this.imageThere = false;
      }
    }
    });
    this.formGroup.statusChanges.subscribe(() => {
      this.errors = this.formGroup
        .get(this.question.key)
        ?.hasError("required") as boolean;
    });
  }
  async fileUploaded(evnet: any) {
    this.uploadedImageFromHere = true;
    const target = evnet.target as HTMLInputElement;
    const filesExtension = (evnet.target.files[0].type as string).split("/")[1];

    const res = await this.filereaderService.readFile(target);

    this.url = res as string;

    const buffer = (await this.filereaderService.readBuffer(
      target,
    )) as ArrayBuffer;
    this.httpService.uploadImageToServer(
      buffer,
      `${this.urls}/write/upload-image`,
      filesExtension,
    );
  }

  deleteImage() {
   
    if(!this.disableDeletOptionUpper){
    this.imageThere = false;
    this.url = "";
    this.disableDeletOptionUpper=true
    this.formGroup.get('image')?.setValue("")
  }
  }
}
