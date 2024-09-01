import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import BaseQuestion from '../../../../custom-class/questions-class/creator-write-sec/base.question';
import { ReadFilesService } from '../../../../services/readFile-single/read-files.service';
import { HttpServiceService } from '../../../../services/global-http/http-service.service';

@Component({
  selector: 'app-individual-input-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './individual-input-form.component.html',
  styleUrl: './individual-input-form.component.css'
})
export class IndividualInputFormComponent {
  filereaderService=inject(ReadFilesService)
  httpService=inject(HttpServiceService)
  classNames={focused:false}
@Input() formGroup!:FormGroup
@Input() question!:BaseQuestion
errors:boolean=false
url!:string
constructor(){
 
  
}
ngAfterViewInit(){
  this.formGroup.statusChanges.subscribe(()=>{
    this.errors=this.formGroup.get(this.question.key)?.hasError('required') as boolean 
  })
}
async fileUploaded(evnet:any){
  const target=evnet.target as HTMLInputElement
  const filesExtension=(evnet.target.files[0].type as string).split('/')[1]
  console.log(target,"outside")
  const res=await this.filereaderService.readFile(target)

  this.url=res as string
  console.log(target,"outside")
  const buffer=await this.filereaderService.readBuffer(target) as ArrayBuffer
  this.httpService.uploadImageToServer(buffer,'http://localhost:3000/write/upload-image',filesExtension)
  
}

deleteImage(){
  this.url=''
}
}

