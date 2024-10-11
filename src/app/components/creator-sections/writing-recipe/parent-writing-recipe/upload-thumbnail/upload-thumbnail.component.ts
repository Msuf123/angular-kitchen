import { Component, inject, Injector, Input } from '@angular/core';
import { HttpServiceService } from '../../../../../services/global-http/http-service.service';
import { ReadFilesService } from '../../../../../services/readFile-single/read-files.service';
import { url } from '../../../../../app.config';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadStatusService } from '../../../../../services/readFile-single/upload-status/upload-status.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-thumbnail',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './upload-thumbnail.component.html',
  styleUrl: './upload-thumbnail.component.css'
})
export class UploadThumbnailComponent {
  http=inject(HttpServiceService)
  filereaderService = inject(ReadFilesService);
  url!: string;
  injector = inject(Injector);
  @Input() formGroup!: FormGroup;
  status = inject(UploadStatusService);
  urls = this.injector.get(url);
  uploadedImageFromHere = false;
  progress = this.status.progressStatus.value.status;
  imageThere = false;
  showProgress = false;
  text="You can set a thumbnail for a recipe"
  
  constructor(){
     }
  showVal(){
    console.log(this.formGroup.value)
  }
  ngAfterViewInit() { 
    this.formGroup.valueChanges.subscribe((currentState)=>{
      
      if(currentState.thumbnail!==""){
        console.log(currentState)
        console.log("setting thubmanil")
        this.url=currentState.thumbnail as string
        this.showProgress=false
        this.uploadedImageFromHere=true
      }
    })
    
    this.status.progressStatus.subscribe((status) => {
      
      if (status.name !== "error") {
        if (!this.imageThere) {
          if (status.status < 100) {
            this.showProgress = true;
            this.progress = status.status;
          } else if (status.status === 100 && this.uploadedImageFromHere) {
            console.log("upload complete")
            let name = this.status.progressStatus.value.name;
            this.imageThere = true;
            this.status.progressStatus.next({ name: "", status: 0 });
            this.formGroup.get("thumbnail")?.setValue(name);
            this.showProgress = false;
            this.uploadedImageFromHere = false;
          }
        }
      } else {
        this.uploadedImageFromHere = false;
        this.url = "";
        this.imageThere = false;
      }
    });
  }
  async fileUploaded(evnet: any) {
   
    const target = evnet.target as HTMLInputElement;
    const filesExtension = (evnet.target.files[0].type as string).split("/")[1];

    const res = await this.filereaderService.readFile(target);

    this.url = res as string;

    const buffer = (await this.filereaderService.readBuffer(
      target,
    )) as ArrayBuffer;
    this.http.uploadImageToServer(
      buffer,
      `${this.urls}/write/upload-image`,
      filesExtension,
    );
  }
  deleteImage() {
    
    this.url = "";
  }
  cancelPublish(){

  }
  publish(){
this.http.post('/write/draft/publish',{...this.formGroup.value,id:'l'}).subscribe((a)=>{
    console.log(a)})
  }

}
