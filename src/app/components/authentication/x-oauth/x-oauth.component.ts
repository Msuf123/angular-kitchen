import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { adjectives, colors, uniqueNamesGenerator } from 'unique-names-generator';

@Component({
  selector: 'app-x-oauth',
  standalone: true,
  imports: [],
  templateUrl: './x-oauth.component.html',
  styleUrl: './x-oauth.component.css'
})
export class XOauthComponent implements OnInit{
  router=inject(ActivatedRoute)
  http=inject(HttpServiceService)
  twitterLogin=new URL('https://twitter.com/i/oauth2/authorize')
  twitterSearchPrams=new URLSearchParams({
    response_type:"code",
    client_id:"Rmd2OG42UE5qeXBuX3FyMUN6REY6MTpjaQ",
    redirect_uri:"https://angular-kitchen.vercel.app/oauth/x",
    state:"2",
    code_challenge:'jkdaf',
    code_challenge_method:'plain',scope:'users.read+tweet.read'
  })
  ngOnInit(): void {
    const accessToken=new URL(window.location.href)
     const searchPrmas=new URLSearchParams(accessToken.searchParams)
    
    if(!searchPrmas.has('code')){
      const code=uniqueNamesGenerator({dictionaries:[adjectives,colors]})
      console.log('Mkaing request with code',code)
        this.http.post('/x-oauth/codeChallange',{code}).subscribe((a)=>{
          if(a==='okay'){
            this.twitterSearchPrams.set('code_challenge',code)
           console.log(this.twitterSearchPrams.get(code))
            window.location.href=this.twitterLogin.toString()+'?'+this.twitterSearchPrams.toString()
          }
        })
      }
     else{
     if(searchPrmas.has('code')){
      const code=searchPrmas.get('code')
      this.http.post('/x-oauth/code',{code}).subscribe((a)=>{
        console.log(a)
      })
     }
     else{
      console.log('Try again')
     }
    }
  }
  constructor(){
    
  }
    
}
