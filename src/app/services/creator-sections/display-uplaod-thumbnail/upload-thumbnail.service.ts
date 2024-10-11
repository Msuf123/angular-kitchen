import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadThumbnailService {

  constructor() { }
  shouldDisplayThumbnail=new BehaviorSubject<boolean>(false)
}
