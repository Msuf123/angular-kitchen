import { Component, inject, Input } from '@angular/core';
import { SignedInService } from '../../../services/details-recipe/signedIn/signed-in.service';
import { HttpServiceService } from '../../../services/global-http/http-service.service';

@Component({
  selector: 'app-like-dislike',
  standalone: true,
  imports: [],
  templateUrl: './like-dislike.component.html',
  styleUrl: './like-dislike.component.css'
})
export class LikeDislikeComponent {
  signedIn=inject(SignedInService)
  httpservice=inject(HttpServiceService)
  value=false
  @Input() id!:string
  constructor(){
    console.log(this.id)
    this.signedIn.isSignedIn.subscribe((value)=>{
      console.log(value)
      this.value=value
    })
  }
 like(){
  if(this.value){
    
    this.httpservice.get('/recipes/user-actions/like-recipe/'+this.id).subscribe((a)=>{
      console.log(a)
    })
  }
  else{
  this.signedIn.displayMsg.next(true)
}
 }
 dislike(){
  if(this.value){
    this.httpservice.get('/recipes/user-actions/dislike-recipe/'+this.id).subscribe((a)=>{
      console.log(a)
    })
  }
  else{
    this.signedIn.displayMsg.next(true)
  }
 }
 save(){
  if(this.signedIn.isSignedIn.value){
   
  }
  this.signedIn.displayMsg.next(true)
 }
}
