import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ReadFilesService } from '../../../../../services/readFile-single/read-files.service';
import { HttpServiceService } from '../../../../../services/global-http/http-service.service';

@Component({
  selector: 'app-writing-third-section',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './writing-third-section.component.html',
  styleUrl: './writing-third-section.component.css'
})
export class WritingThirdSectionComponent {
@Input() form!:FormGroup
fileReadingService=inject(ReadFilesService)
httpService=inject(HttpServiceService)
fileDataUrl=''
get steps(){
  return this.form.get('steps') as FormArray
}
async fileUploaded(evnet:any){
  const target=evnet.target as HTMLInputElement
  const filesExtension=(evnet.target.files[0].type as string).split('/')[1]
  console.log(target,"outside")
  const res=await this.fileReadingService.readFile(target)

  this.fileDataUrl=res as string
  console.log(target,"outside")
  const buffer=await this.fileReadingService.readBuffer(target) as ArrayBuffer
  this.httpService.uploadImageToServer(buffer,'http://localhost:3000/write/image-upload',filesExtension)
  
}


addSteps(){
  this.steps.push(new FormGroup({
    heading:new FormControl(''),
    about:new FormControl(''),
    imageOfEachDescription:new FormControl('')
  }))
}
deleteImage(){
  this.fileDataUrl=''
}
run(e:string){
console.log(e)
}

}
