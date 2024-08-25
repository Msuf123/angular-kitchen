import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayMessageService {

  constructor() { }
  shouldDisplay=new BehaviorSubject<boolean>(false)
  exit=new BehaviorSubject<boolean>(false)
}
