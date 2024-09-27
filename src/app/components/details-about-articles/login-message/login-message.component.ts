import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SignedInService } from '../../../services/details-recipe/signedIn/signed-in.service';

@Component({
  selector: 'app-login-message',
  standalone: true,
  imports: [],
  templateUrl: './login-message.component.html',
  styleUrl: './login-message.component.css'
})
export class LoginMessageComponent {
  router=inject(Router)
  signedIn=inject(SignedInService)
 navToLogin(){
   this.router.navigate(['/login'])
 }
 navToBack(){
  this.signedIn.displayMsg.next(false)
 }
}
