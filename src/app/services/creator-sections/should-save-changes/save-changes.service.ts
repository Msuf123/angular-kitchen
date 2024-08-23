import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveChangesService {

  constructor() { }
  saveCahnges=new BehaviorSubject<boolean>(false)
}
