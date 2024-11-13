import { Component } from '@angular/core';
import { DaysComponent } from './days/days.component';
import { BehaviorSubject, throwIfEmpty } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DaysBannerComponent } from './days-banner/days-banner.component';

@Component({
  selector: 'app-work-area',
  standalone: true,
  imports: [DaysComponent,CommonModule,DaysBannerComponent],
  templateUrl: './work-area.component.html',
  styleUrl: './work-area.component.css'
})
export class WorkAreaComponent {
 constructor(){

 }
 times$=new BehaviorSubject<number[]>([2])
 days$=new BehaviorSubject<number[]>([2])
 addTime(){
  let currentState=this.times$.value
  this.times$.next([...currentState,1])
 }
 addDays(){
   let currentDays=this.days$.value
   this.days$.next([...currentDays,2])
 }
}
