import { Component, DoCheck, inject, Input, OnInit } from '@angular/core';
import { WorkAreaLocalStoreService } from '../../store/work-area-local-store.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { StirngChecker } from '../../../../../../../../GlobalFunctions/GlobalFunctionsForString';
import { SelectDaysToRepeatComponent } from './select-days-to-repeat/select-days-to-repeat.component';

@Component({
  selector: 'app-edit-time-day',
  standalone: true,
  imports: [FormsModule,CommonModule,SelectDaysToRepeatComponent],
  templateUrl: './edit-time-day.component.html',
  styleUrl: './edit-time-day.component.css'
}) 
export class EditTimeDayComponent implements OnInit {
storeService=inject(WorkAreaLocalStoreService)
vlaueOfInput=""
currentValueOfDays=this.storeService.getYAxis$
currentValuesOfTime=this.storeService.getXAxis$
day:string
time:string
@Input() lable!:string|undefined
@Input() position!:number[]|undefined
@Input() displayPopup$!:BehaviorSubject<boolean>
constructor(){
 this.day=""
 this.time=""
}
ngOnInit(): void {
  this.currentValueOfDays.subscribe((arrayOfDays)=>{
    this.day=arrayOfDays[(this.position as number[])[1]]
  })
  this.currentValuesOfTime.subscribe((arrayOfTime)=>{
  
    this.time=arrayOfTime[(this.position as number[])[0]]
  })
}

setTimeOrDate(){
 if(this.lable==="timeLable"){
   let stringToEdit = StirngChecker.blankString(this.vlaueOfInput)
   if(stringToEdit==="undefined"){
    //Test this code if my callback is delayed then the value passed to dispach will be undfined
     this.currentValuesOfTime.subscribe((value)=>{
       stringToEdit = value[(this.position as number[])[0]]
       
   })
   }
 this.storeService.editTime({index:this.position as number[],vlaue:stringToEdit})
  this.displayPopup$.next(false)
 } 

 else{
   let stringToEdit = StirngChecker.blankString(this.vlaueOfInput)
   if (stringToEdit === "undefined") {
     //Test this code if my callback is delayed then the value passed to dispach will be undfined
     this.currentValueOfDays.subscribe((value) => {
       stringToEdit = value[(this.position as number[])[1]]

     })
   }
  this.storeService.editDay({index:this.position as number[],vlaue:stringToEdit})
  this.displayPopup$.next(false)
 }
}
logger(d:KeyboardEvent){
  if(d.key==="Enter"){
    this.setTimeOrDate()
  }
}

}
