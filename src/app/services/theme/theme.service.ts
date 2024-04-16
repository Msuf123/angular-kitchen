import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {

  constructor() { }
  theme=new BehaviorSubject<boolean>(false)
}
