import { Component, Injector, inject } from '@angular/core';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  clientService=inject(HttpServiceService)
  nav=inject(Router)
  googleUrl=new URL("/o/oauth2/v2/auth","https://accounts.google.com")
  searchPrams=new URLSearchParams({
    client_id:'1018052408121-d8lvo3m0pt9601n5m8m9k9u4jlbm78of.apps.googleusercontent.com',
    redirect_uri:'http://localhost:4200/oauth/google',
    response_type:'token',
    scope:'https://www.googleapis.com/auth/userinfo.email'
  })
 
  constructor(){
    this.googleUrl.search=this.searchPrams.toString()
     }
     navToX(){
      this.nav.navigate(['/oauth','x'])
     }
}
