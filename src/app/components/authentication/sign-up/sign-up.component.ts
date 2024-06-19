import { CSP_NONCE, Component, DoCheck, Inject, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { url } from '../../../app.config';
import { CommonModule } from '@angular/common';
import { ReadFilesService } from '../../../services/readFile-single/read-files.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent{
 formBuilder=inject(FormBuilder)
 httpService=inject(HttpServiceService)
 fileReadingService=inject(ReadFilesService)
 fileDataUrl=''

 signUpForm=this.formBuilder.group({
  username:[''],
  password:[''],
  email:[''],
  files:['']
 })
 constructor(){
  let a=[3]
  console.log(a.slice(3,5))
 }
 async fileUploaded(evnet:any){
  const filesExtension=(evnet.target.files[0].type as string).split('/')[1]
  console.log(filesExtension)
  const res=await this.fileReadingService.readFile(evnet.target)
  this.fileDataUrl=res as string
  const buffer=await this.fileReadingService.readBuffer(evnet.target) as ArrayBuffer
  this.httpService.uploadImageToServer(buffer,'http://localhost:3000/sign-up/upload-image','ll.jpg',filesExtension)
  
}
 formSubmitted(){
  
  this.httpService.post('http://localhost:3000/sign-up/send-mail',this.signUpForm.value).subscribe((a)=>console.log(a))
 }
}
