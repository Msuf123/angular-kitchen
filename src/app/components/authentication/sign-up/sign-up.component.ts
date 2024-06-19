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
 
 async fileUploaded(evnet:any){
  const res=await this.fileReadingService.raedFile(evnet.target)
  this.fileDataUrl=res as string
}
 formSubmitted(){
  
  this.httpService.post('http://localhost:3000/sign-up/send-mail',this.signUpForm.value).subscribe((a)=>console.log(a))
 }
}
