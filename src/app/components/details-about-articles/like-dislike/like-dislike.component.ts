import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SignedInService } from '../../../services/details-recipe/signedIn/signed-in.service';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { BehaviorSubject } from 'rxjs';
import { useractivity } from '../user-activity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-like-dislike',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './like-dislike.component.html',
  styleUrl: './like-dislike.component.css'
})
export class LikeDislikeComponent implements OnChanges{
  signedIn=inject(SignedInService)
  httpservice=inject(HttpServiceService)
  value=false
  obj={ like: false, disliked: false, saved: false }
  likedClassName={recipeLiked:true}
  dislikedRecipe={recipeDisliked:true}
  savedRecipe={seved:true}
  values={liked:"Like",dislike:"Dislike",saved:"Save"}
  @Input() id!:string
  @Input() subject!:BehaviorSubject<useractivity<boolean>>
  constructor(){
    
    this.signedIn.isSignedIn.subscribe((value)=>{
      
      this.value=value
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.subject.subscribe((a)=>{
      if(a.like===true){
         this.values.liked="Liked"
         this.values.dislike="Dislike"
         this.dislikedRecipe.recipeDisliked=false
         this.likedClassName.recipeLiked=true
      }
      if(a.disliked===true){
        this.values.dislike="Disliked"
        this.values.liked="Like"
        this.dislikedRecipe.recipeDisliked=true
         this.likedClassName.recipeLiked=false
      }
      if(a.saved===true){
        this.values.saved="Already Saved"
        this.savedRecipe.seved=true
      }
      else{
        this.values.saved="Save"
        this.savedRecipe.seved=false
      }
    })
    
  }
 like(){
  if(this.value){
    
    this.httpservice.get('/recipes/user-actions/like-recipe/'+this.id).subscribe((a)=>{
      if(a==='okay'){
        this.values.liked="Liked"
        this.values.dislike="Dislike"
        this.dislikedRecipe.recipeDisliked=false
        this.likedClassName.recipeLiked=true
      }
    })
  }
  else{
  this.signedIn.displayMsg.next(true)
}
 }
 dislike(){
  if(this.value){
    this.httpservice.get('/recipes/user-actions/dislike-recipe/'+this.id).subscribe((a)=>{
      if(a==='okay'){
        this.values.liked="Like"
        this.values.dislike="Disliked"
        this.dislikedRecipe.recipeDisliked=true
        this.likedClassName.recipeLiked=false
      }
    })
  }
  else{
    this.signedIn.displayMsg.next(true)
  }
 }
 save(){
  if(this.value){
    this.httpservice.get('/recipes/user-actions/saved/'+this.id).subscribe((a)=>{
      if(a==="okay"){
      this.savedRecipe.seved=true
      this.values.saved="Already Saved"
      }
    })
  }
  else{
    this.signedIn.displayMsg.next(true)
  } 
}
}
