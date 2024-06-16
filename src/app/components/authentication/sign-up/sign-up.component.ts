import { Component, DoCheck, Inject, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { url } from '../../../app.config';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements DoCheck{
 formBuilder=inject(FormBuilder)
 httpService=inject(HttpServiceService)
 fileDataUrl=''

 signUpForm=this.formBuilder.group({
  username:[''],
  password:[''],
  email:[''],
  files:['']
 })
 ngDoCheck(): void {
   console.log(this.fileDataUrl)
 }
 fileUploaded(evnet:any){
  
  const files:File=evnet.target.files[0]
  const reder=new FileReader()

  reder.readAsDataURL(files)
  reder.onload=()=>{
    this.fileDataUrl=reder.result as string
  }
  
  reder.onerror = ()=>{
    this.fileDataUrl=''
  };

  
}
 formSubmitted(){
  
  this.httpService.post('http://localhost:3000/sign-up/send-mail',this.signUpForm.value).subscribe((a)=>console.log(a))
 }
}
