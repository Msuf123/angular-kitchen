import { Component, CSP_NONCE, inject } from '@angular/core';
import { HttpServiceService } from '../../../../services/global-http/http-service.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommentSectionService } from '../../../../services/details-recipe/comment-section/comment-section.service';
import { DisplayComment } from '../../../../services/details-recipe/comment-section/comments';

@Component({
  selector: 'app-display-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-comment.component.html',
  styleUrl: './display-comment.component.css'
})
export class DisplayCommentComponent {
  http=inject(HttpServiceService)
  routet=inject(ActivatedRoute)
  commentService=inject(CommentSectionService)
  comments:DisplayComment[]=[]
 constructor(){
  this.commentService.displayCommnet.subscribe((a)=>{
    this.comments=a
  })
  this.http.get('/recipes/comment/'+this.routet.snapshot.params['id']).subscribe((a)=>{
   
    this.commentService.displayCommnet.next(a as DisplayComment[])
   
  })
 }
}
