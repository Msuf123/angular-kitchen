import { Component } from '@angular/core';

@Component({
  selector: 'app-x-oauth',
  standalone: true,
  imports: [],
  templateUrl: './x-oauth.component.html',
  styleUrl: './x-oauth.component.css'
})
export class XOauthComponent {
  constructor(){
    console.log(window.location.href)
   const accessToken=new URL(window.location.href)
   const searchPrmas=new URLSearchParams(accessToken.searchParams)
   if(searchPrmas.has('code')){
    console.log('Contains code ')
   }
   else{
    console.log('Try again')
   }
  }
}
