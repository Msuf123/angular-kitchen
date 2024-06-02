import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Observable, delay, map } from 'rxjs';
import { url } from '../../../app.config';

export const loadWritingGuard: CanActivateFn = (route, state) => {
  
  return new Observable((a)=>a.next(true)).pipe(delay(400000),map((a)=>true));
};
