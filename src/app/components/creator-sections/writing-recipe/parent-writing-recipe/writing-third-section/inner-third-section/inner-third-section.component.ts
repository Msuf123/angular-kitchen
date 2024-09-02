import { Component, Input, inject } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UploadStatusService } from '../../../../../../services/readFile-single/upload-status/upload-status.service';
import { CommonModule } from '@angular/common';
import { ReadFilesService } from '../../../../../../services/readFile-single/read-files.service';
import { HttpServiceService } from '../../../../../../services/global-http/http-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-inner-third-section',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './inner-third-section.component.html',
  styleUrl: './inner-third-section.component.css'
})
export class InnerThirdSectionComponent {
  fileReadingService=inject(ReadFilesService)
  @Input() formArray!:any
  @Input() postion!:number
  httpService=inject(HttpServiceService)
  displayStatus=new BehaviorSubject<boolean>(false)
  progressStatus=new BehaviorSubject<number>(0)
  progress=this.progressStatus.value
  @Input() form!:FormGroup
  showProgress=this.displayStatus.value
  
  fileDataUrl=''
  constructor(){
    this.displayStatus.subscribe((display)=>{
      this.showProgress=display
    })
    this.progressStatus.subscribe((status)=>{
      this.progress=status
      if(status===100){
        this.steps.at(this.postion).get('imageUrl')!.setValue('res')
      }
    })
  }
  async fileUploaded(evnet:any){
    const target=evnet.target as HTMLInputElement
    const filesExtension=(evnet.target.files[0].type as string).split('/')[1]
    const res=await this.fileReadingService.readFile(target)
    this.fileDataUrl=res as string
    const buffer=await this.fileReadingService.readBuffer(target) as ArrayBuffer
    this.httpService.uploadImageToServer(buffer,'http://localhost:3000/write/upload-image',filesExtension)
    
  }
  get steps(){
      return this.form.get('steps') as FormArray
     }
  deleteImage(){
    this.fileDataUrl=''
  }
  run(e:string){
    console.log(e)
    }
}
