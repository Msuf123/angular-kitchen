import { Injector, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Observable, delay, map } from 'rxjs';
import { url } from '../../../app.config';
import { HttpServiceService } from '../../../services/global-http/http-service.service';

export const loadWritingGuard: CanActivateFn = (route, state) => {
  const req=inject(HttpServiceService)
  const injector=inject(Injector)
  const verifyUrl=injector.get(url)
  return new Observable((resolver)=>req.get(verifyUrl+"/as").subscribe((a)=>{resolver.next(a as boolean)}))
};
