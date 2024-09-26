import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  userDetails=new BehaviorSubject<{name:string,url:string}>({name:"",url:""})
  sessionExprired=new BehaviorSubject<boolean>(false)
}
