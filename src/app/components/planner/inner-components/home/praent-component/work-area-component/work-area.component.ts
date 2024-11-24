import { Component, inject } from '@angular/core';
import { DaysComponent } from './days/days.component';
import { BehaviorSubject, throwIfEmpty } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DaysBannerComponent } from './days-banner/days-banner.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { provideComponentStore } from '@ngrx/component-store';
import { IndividualData, WorkAreaLocalStoreService } from './store/work-area-local-store.service';

@Component({
  selector: 'app-work-area',
  standalone: true,
  imports: [DaysComponent,CommonModule,DaysBannerComponent,PopUpComponent],
  templateUrl: './work-area.component.html',
  styleUrl: './work-area.component.css',
  providers:[provideComponentStore(WorkAreaLocalStoreService)]
})
export class WorkAreaComponent {
 storeService=inject(WorkAreaLocalStoreService)
 editorType$=new BehaviorSubject<EditorInterfaceData>({postion:[0,0],type:"mainDay"})
 days$=this.storeService.getYAxis$
 times$=this.storeService.getXAxis$
 displayEditor$=new BehaviorSubject<boolean>(false)
 meals:any[]=[]
 constructor(){
  this.storeService.getMeals$.subscribe((state)=>{
    this.meals=state
    console.log(state)
  })
 }

 addTime(){
  this.storeService.addTimes('Moringin')
 }
 addDays(){
  this.storeService.addDays()
 }
 editTime(index:number){
  this.editorType$.next({postion:[index,0],type:"timeLable"})
  this.displayEditor$.next(true)
 }
 editDay(index:number){
  this.editorType$.next({postion:[0,index],type:"daysLable"})
  this.displayEditor$.next(true)
 }
 getIndividualMeal(xAxis:number,yAxis:number):IndividualData{
  let sortedArray= this.meals.filter((currentMeal:IndividualData)=>{
    if(currentMeal.xAxis===xAxis&&currentMeal.yAxis===yAxis){
      return true
    }
    else{
      return false
    }
   
  })
  return sortedArray[0]
 }







}
export interface EditorInterfaceData{
  postion:number[],
  type:EditActionOfPlan
}
export type EditActionOfPlan="daysLable"|"timeLable"|"mainDay"