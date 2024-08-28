import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-msg',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-msg.component.html',
  styleUrl: './sign-in-msg.component.css'
})
export class SignInMsgComponent {
  route=inject(Router)
  redirect(){
  this.route.navigate(['login'])

 }
}
