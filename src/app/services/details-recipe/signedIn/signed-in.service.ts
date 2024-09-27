import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignedInService {
  isSignedIn=new BehaviorSubject<boolean>(false)
  displayMsg=new BehaviorSubject<boolean>(false)
  constructor() { }
}
