import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 formBuilder=inject(FormBuilder)
 signUpForm=this.formBuilder.group({
  username:[''],
  password:[''],
  email:['']
 })
 formSubmitted(){
  console.log(this.signUpForm.value)
 }
}
