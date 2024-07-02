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
  googleUrl=new URL("/o/oauth2/v2/auth","https://accounts.google.com")
  searchPrams=new URLSearchParams({
    client_id:'1018052408121-d8lvo3m0pt9601n5m8m9k9u4jlbm78of.apps.googleusercontent.com',
    redirect_uri:'http://localhost:4200/oauth/google',
    response_type:'token',
    scope:'https://www.googleapis.com/auth/userinfo.email'
  })
  twitterLogin=new URL('https://twitter.com/i/oauth2/authorize')
  twitterSearchPrams=new URLSearchParams({
    response_type:"code",
    client_id:"Rmd2OG42UE5qeXBuX3FyMUN6REY6MTpjaQ",
    redirect_uri:"https://angular-kitchen.vercel.app/oauth/x",
    state:"2",
    code_challenge:'jkdaf',
    code_challenge_method:'plain',scope:'users.read'
  })
  constructor(){
    this.googleUrl.search=this.searchPrams.toString()
    this.twitterLogin.search=this.twitterSearchPrams.toString()
     }
}
