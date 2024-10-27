import { AfterContentInit, Component, CSP_NONCE, EventEmitter, inject, Injector, Input, OnInit, Output } from '@angular/core';
import { HttpServiceService } from '../../../../../services/global-http/http-service.service';
import { ReadFilesService } from '../../../../../services/readFile-single/read-files.service';
import { url } from '../../../../../app.config';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadStatusService } from '../../../../../services/readFile-single/upload-status/upload-status.service';
import { CommonModule, NgClass } from '@angular/common';
import { UploadThumbnailService } from '../../../../../services/creator-sections/display-uplaod-thumbnail/upload-thumbnail.service';
import { Router } from '@angular/router';
import { FormsInvalidService } from '../../../../../services/creator-sections/error-in-forms/forms-invalid.service';
import { ErrorImageService } from '../../../../../services/error-image-upload/error-image.service';
import { ProfileService } from '../../../../../services/account/profile/profile.service';

@Component({
  selector: 'app-upload-thumbnail',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,NgClass],
  templateUrl: './upload-thumbnail.component.html',
  styleUrl: './upload-thumbnail.component.css'
})
export class UploadThumbnailComponent {
  http=inject(HttpServiceService)
  filereaderService = inject(ReadFilesService);
  profileService=inject(ProfileService)
  url!: string;
  injector = inject(Injector);
  @Input() formGroup!: FormGroup;
  @Input() textOfDraftButton!:string
  @Input() id!:string
  @Input() shouldDeactivaeSubject!:any
  @Input() lableText!:string
  @Input() uploadThumbnail!:boolean
  @Input() userDetails!:{name:string,url:string}
  @Input() secondCancelButton!:boolean
  @Output() toogleThumbnail=new EventEmitter()
  formsInvalid = inject(FormsInvalidService);
  status = inject(UploadStatusService);
  thumbnailService=inject(UploadThumbnailService)
  router=inject(Router)
  urls = this.injector.get(url);
  showProgress=false
  progress = this.status.progressStatus.value.status;
  showError = inject(ErrorImageService);
  disableDeletOption=true
  disableDeletOptionOfUserImg=true
  disableCancelOperation=true
  @Input() text!:string
  ngOnInit() {

    this.text = this.text || "You can set a thumbnail for a recipe";
    this.lableText = this.lableText || "Upload Thumbnail";
    this.uploadThumbnail = this.uploadThumbnail !== undefined ? this.uploadThumbnail : true;
    console.log(this.formGroup.value,'kkkk')
  }
  constructor(){
    
  }
  
  ngAfterContentInit() { 
   
    this.status.progressStatus.subscribe((status) => {
      
      //If we ahve to upload thubnail or image icon?
      if(this.uploadThumbnail){
          if (status.name !== "error" && (this.formGroup.get("thumbnail")?.value===null||this.formGroup.get("thumbnail")?.value==="")) {
            console.log("hello")
              if (status.status < 100) {
                this.showProgress = true;
                this.progress = status.status;
                this.disableCancelOperation=false
              } else if (status.status === 100) {
                console.log("thumbnail uplaoded hahah ")
                let name = this.status.progressStatus.value.name;
                this.formGroup.get("thumbnail")?.setValue(name);
                console.log(this.formGroup.value,'f')
                this.status.progressStatus.next({ name: "", status: 0 });
                this.showProgress = false;
                this.disableDeletOption=false
                this.disableCancelOperation=true
              }
            
          }
    }


    else{
      if (status.name !== "error") {
        
          if (status.status < 100) {
            console.log('Processing',status)
            this.showProgress = true;
            this.progress = status.status;
            
          } else if (status.status === 100) {
            
            this.http.get("/account/change-profile-image?url="+this.status.progressStatus.value.name).subscribe((res)=>{
              let name = this.status.progressStatus.value.name;
              this.showProgress = false;
              
              
              this.status.progressStatus.next({ name: "", status: 0 });
              if(res==='okay'){
                let name=this.profileService.userDetails.value.name
              this.profileService.userDetails.next({name:name,url:this.status.progressStatus.value.name})
              setTimeout(()=>{
                this.toogleThumbnail.emit(true)
              },1000)
             
            }
            else{
              this.toogleThumbnail.emit(true)
        this.showError.setError(true)
            }
            })
           
            
            
          }
        
      }
      else{
        this.showProgress = false;
        this.status.progressStatus.next({ name: "", status: 0 });
        this.toogleThumbnail.emit(true)
        this.showError.setError(true)
      }
      
    }
    });
  }
  async fileUploaded(evnet: any) {
   this.disableDeletOptionOfUserImg=false
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
    if(!this.disableDeletOption){
      this.formGroup.get("thumbnail")?.setValue("")
    this.url = "";
    }
    
    
  }
  cancelPublish(){
  this.thumbnailService.shouldDisplayThumbnail.next(false)
  }
  cancelShowPopup(){
    
      
    this.toogleThumbnail.emit(true)
  
  }
  publish(){
    if(this.textOfDraftButton==="Save as Draft"){
      this.http.post('/write/draft/publish/new-recipe',this.formGroup.value).subscribe((res)=>{
        if(res==='okay'){
          this.shouldDeactivaeSubject.next(true)
          this.router.navigate(['/account/publish'])
        }
      })
    }
    else{
     
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
