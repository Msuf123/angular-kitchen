import { CSP_NONCE, Component, DoCheck, Inject, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpServiceService } from '../../../../../public/http-service.service';
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
 }
 async fileUploaded(evnet:any){
  const filesExtension=(evnet.target.files[0].type as string).split('/')[1]
  const res=await this.fileReadingService.readFile(evnet.target)
  this.fileDataUrl=res as string
  const buffer=await this.fileReadingService.readBuffer(evnet.target) as ArrayBuffer
  this.httpService.uploadImageToServer(buffer,'http://localhost:3000/sign-up/upload-image',filesExtension)
  
}
 formSubmitted(){
  
  this.httpService.post('http://localhost:3000/sign-up/send-mail',this.signUpForm.value).subscribe((a)=>console.log(a))
 }
}
