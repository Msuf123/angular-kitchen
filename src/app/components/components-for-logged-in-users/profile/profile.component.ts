import { Component, inject } from '@angular/core';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { ProfileService } from '../../../services/account/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  httpService=inject(HttpServiceService)
  profileSerice=inject(ProfileService)
  routerService=inject(Router)
  userDetails={name:"",url:""}
 constructor(){

   this.httpService.get('/account/user-name').subscribe((a)=>{
    if(a==="Unable to reach to server"){
     this.routerService.navigate(["/"])
    }
    if(a==="Something went wrong"){
    this.profileSerice.sessionExprired.next(true)
    }
    else{
      this.profileSerice.userDetails.next(a as {name:string,url:string})
    }
   })

   

   this.profileSerice.userDetails.subscribe((a)=>{
    this.userDetails=a
   })


 }
 logout(){
  this.httpService.get('/account/logout').subscribe((a)=>{
    console.log('a')
   })
 }
 
}
