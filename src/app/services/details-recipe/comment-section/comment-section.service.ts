import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DisplayComment } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentSectionService {
  commentSection=new BehaviorSubject<Comment[]>([])
  displayCommnet=new BehaviorSubject<DisplayComment[]>([])
  constructor() { }
}
