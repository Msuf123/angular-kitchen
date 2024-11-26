import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { daysValue, WorkAreaLocalStoreService } from '../../../store/work-area-local-store.service';
import { DaysOperatioin } from './Custom-Functions/AvailableDays';

@Component({
  selector: 'app-select-days-to-repeat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-days-to-repeat.component.html',
  styleUrl: './select-days-to-repeat.component.css'
})

export class SelectDaysToRepeatComponent implements OnInit {
  @Input() postion!:any
  store=inject(WorkAreaLocalStoreService)
  daysOfTakenByThisDay:daysValue[]=[]
  daysThatAreAvailable:daysValue[]=[]
  constructor(){
    
 
  }
 ngOnInit(): void {
  this.store.getDaysToRepeat$.subscribe((state)=>{
    this.daysOfTakenByThisDay=state[this.postion[1]]
    this.daysThatAreAvailable=DaysOperatioin.daysThatAreAvailable(state,this.postion[1])
    console.log(this.daysThatAreAvailable)
  })
 }
 days:daysValue[]=["S","M","T","W","Th","F","Sa"]
 selectDay(shouldAct:boolean,index:number){
   if(shouldAct){
      console.log("Adding data",shouldAct,index)
      this.store.editDayRepeat({day:this.days[index],index:this.postion[1]})
   }
 }
}
