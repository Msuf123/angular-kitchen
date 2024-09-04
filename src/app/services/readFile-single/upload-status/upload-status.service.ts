import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadStatusService {

  constructor() { }
  displayStatus=new BehaviorSubject<boolean>(false)
  progressStatus=new BehaviorSubject<{name:string,status:number}>({name:'',status:0})
  
}
