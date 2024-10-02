import { Component, inject } from '@angular/core';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { DisplayCommentComponent } from './display-comment/display-comment.component';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [PostCommentComponent,DisplayCommentComponent],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.css'
})
export class CommentSectionComponent {

}
