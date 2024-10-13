import { Component, inject, Injector, Input } from '@angular/core';
import { HttpServiceService } from '../../../../../services/global-http/http-service.service';
import { ReadFilesService } from '../../../../../services/readFile-single/read-files.service';
import { url } from '../../../../../app.config';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadStatusService } from '../../../../../services/readFile-single/upload-status/upload-status.service';
import { CommonModule } from '@angular/common';
import { UploadThumbnailService } from '../../../../../services/creator-sections/display-uplaod-thumbnail/upload-thumbnail.service';
import { Router } from '@angular/router';
import { FormsInvalidService } from '../../../../../services/creator-sections/error-in-forms/forms-invalid.service';

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
  @Input() textOfDraftButton!:string
  @Input() id!:string
  formsInvalid = inject(FormsInvalidService);
  status = inject(UploadStatusService);
  thumbnailService=inject(UploadThumbnailService)
  router=inject(Router)
  urls = this.injector.get(url);
  showProgress=false
  progress = this.status.progressStatus.value.status;
  
  text="You can set a thumbnail for a recipe"
  

  ngAfterViewInit() { 
   
    this.status.progressStatus.subscribe((status) => {
     
      if (status.name !== "error" && this.formGroup.get("thumbnail")?.value===null) {
        console.log(this.showProgress)
          if (status.status < 100) {
            
            this.showProgress = true;
            this.progress = status.status;
          } else if (status.status === 100) {
            
            let name = this.status.progressStatus.value.name;
           
            this.status.progressStatus.next({ name: "", status: 0 });
            this.formGroup.get("thumbnail")?.setValue(name);
            this.showProgress = false;
            
          }
        
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
  this.thumbnailService.shouldDisplayThumbnail.next(false)
  }
  publish(){
    if(this.textOfDraftButton==="Save as Draft"){
      console.log('creaitng new draft')
    }
    else{
      console.log("publsing draft")
      console.log(this.formGroup.value)
      this.http.post('/account/draft/publish/saved/'+this.id,this.formGroup.value).subscribe((a)=>{
      if(a==="okay"){
        this.router.navigate(['/account/publish'])
      }
      else{
        this.formsInvalid.setHasError("Unable to pusblish the data")
        this.formsInvalid.setIsThereError(true);
      }
  })
    }

  }

}
