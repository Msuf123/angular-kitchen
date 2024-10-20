import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmptyDataService {
  shouldShowDataMessage=new BehaviorSubject(false)
  constructor() { }
}
