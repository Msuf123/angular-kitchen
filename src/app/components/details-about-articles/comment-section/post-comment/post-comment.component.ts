import { Component, inject } from '@angular/core';
import { SignedInService } from '../../../../services/details-recipe/signedIn/signed-in.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpServiceService } from '../../../../services/global-http/http-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommentSectionService } from '../../../../services/details-recipe/comment-section/comment-section.service';

@Component({
  selector: 'app-post-comment',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './post-comment.component.html',
  styleUrl: './post-comment.component.css'
})
export class PostCommentComponent {
 signedIn=inject(SignedInService)
 http=inject(HttpServiceService)
 router=inject(ActivatedRoute)
 commentService=inject(CommentSectionService)
 signedInValue=false
 inputField=new FormControl()
 constructor(){
  this.signedIn.isSignedIn.subscribe((a)=>{
    this.signedInValue=a
  })
 }
 postComment(){
  if(this.signedInValue){
  if(this.inputField.value!==""){
  this.http.post('/recipes/user-actions/comment',{id:this.router.snapshot.params['id'],content:this.inputField.value}).subscribe((a:any)=>{
    try{
     let response= JSON.parse(a)
     let array=this.commentService.displayCommnet.value
      array.unshift({author:response.userName as string,url:response.url,data:this.inputField.value})
      this.commentService.displayCommnet.next(array)
    }
    
     catch{
      this.signedIn.displayMsg.next(true)
      this.signedIn.isSignedIn.next(false)
     }
     this.inputField.setValue("")
  })

}}
else{
  this.signedIn.displayMsg.next(true)
}
 
 }
}
