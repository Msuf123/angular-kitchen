import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { url } from '../../../app.config';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 formBuilder=inject(FormBuilder)
 httpService=inject(HttpServiceService)

 signUpForm=this.formBuilder.group({
  username:[''],
  password:[''],
  email:[''],
  files:['']
 })
 fileUploaded(evnet:any){
  //log the input elemnt
  const files:File=evnet.target.files[0]
  const reder=new FileReader()
  console.log(files)
  reder.readAsDataURL(files)
  reder.onload=function(){
    console.log(reder.result);
  }
  reder.onerror = function() {
    console.log(reder.error);
  };

  
}
 formSubmitted(){
  
  this.httpService.post('http://localhost:3000/sign-up/send-mail',this.signUpForm.value).subscribe((a)=>console.log(a))
 }
}
