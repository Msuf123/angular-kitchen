import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorFromServerService {
   erroStatus=new BehaviorSubject<boolean>(false)
  constructor() { }
}
