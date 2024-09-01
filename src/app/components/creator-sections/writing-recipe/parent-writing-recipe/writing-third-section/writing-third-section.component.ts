import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ReadFilesService } from '../../../../../services/readFile-single/read-files.service';
import { HttpServiceService } from '../../../../../services/global-http/http-service.service';
import { UploadStatusService } from '../../../../../services/readFile-single/upload-status/upload-status.service';
import { InnerThirdSectionComponent } from './inner-third-section/inner-third-section.component';

@Component({
  selector: 'app-writing-third-section',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,InnerThirdSectionComponent],
  templateUrl: './writing-third-section.component.html',
  styleUrl: './writing-third-section.component.css'
})
export class WritingThirdSectionComponent {
@Input() form!:FormGroup
fileReadingService=inject(ReadFilesService)
httpService=inject(HttpServiceService)
status=inject(UploadStatusService)
progress=this.status.progressStatus.value
showProgress=this.status.displayStatus.value
showTrashBin=this.status.showTrashBin.value
fileDataUrl=''
constructor(){
  this.status.displayStatus.subscribe((display)=>{
    this.showProgress=display
  })
  this.status.showTrashBin.subscribe((status)=>{
    this.showTrashBin=status
  })
  this.status.progressStatus.subscribe((status)=>{
    this.progress=status
    if(status===100){
      this.steps.at(0).get('imageUrl')!.setValue('res')
    }
  })
}
get steps(){
  return this.form.get('steps') as FormArray
}
async fileUploaded(evnet:any){
  const target=evnet.target as HTMLInputElement
  const filesExtension=(evnet.target.files[0].type as string).split('/')[1]
  const res=await this.fileReadingService.readFile(target)
  this.fileDataUrl=res as string
  const buffer=await this.fileReadingService.readBuffer(target) as ArrayBuffer
  this.httpService.uploadImageToServer(buffer,'http://localhost:3000/write/upload-image',filesExtension)
  
}


addSteps(){
  this.steps.push(new FormGroup({
    heading:new FormControl(''),
    about:new FormControl(''),
    imageUrl:new FormControl('')
  }))
}
deleteImage(){
  this.fileDataUrl=''
}
run(e:string){
console.log(e)
}

}
