import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ClockPlannerService extends ComponentStore<{date:string}>{

  constructor() { 
    super({date:new Date().toString()})
  }
  getDate$=this.select((state)=>state.date)
  updateDate=this.updater((state,value:string)=>{
    return {...state,date:value}
  })
  changeDateEffect=this.effect<void>(()=>{
    
    return new Observable<string>((emmiter)=>{
      const clearId=setInterval(()=>{
        let currentDate=new Date().toString()
        console.log(currentDate)
        emmiter.next(currentDate)
      },60000)
    }).pipe(tap((value)=>this.updateDate(value)))
  })
}
