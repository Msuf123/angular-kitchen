import { Component, inject } from '@angular/core';
import { TimeSelectorComponent } from './time-selector/time-selector.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StirngChecker } from '../../../../../../../../GlobalFunctions/GlobalFunctionsForString';

@Component({
  selector: 'app-edit-meal',
  standalone: true,
  imports: [TimeSelectorComponent,ReactiveFormsModule],
  templateUrl: './edit-meal.component.html',
  styleUrl: './edit-meal.component.css'
})
export class EditMealComponent {
  fomsService=inject(FormBuilder)
  fomsGroup=this.fomsService.group({
    lable:[''],
    timeBefore:[''],
    timeOnEat:this.fomsService.group({
      hours:[''],
      minutes:['']
    }),
    foods:[''],
    totalCaloreis:['']
  })
  constructor(){
    this.fomsGroup.valueChanges.subscribe((formState)=>{
      
      this.controlUserInput(formState.timeOnEat?.hours as string, 13, (value:string,functionToExecute:any,customFunction:boolean,oldValue:number)=>(
        { timeOnEat: { hours: customFunction?functionToExecute(value):oldValue.toString() } }))
    })
  }
  controlUserInput(value: string,valueThatShouldBeMax:number,propertyToUpdate:any) {
    let currentValue = 0
     
   
    if (!Number.isNaN(Number(value))) {

      if (Number(value) < valueThatShouldBeMax) {
        if (value.includes(' ')) {
          // console.log(propertyToUpdate(value))
          this.fomsGroup.patchValue(propertyToUpdate(value,StirngChecker.removeAllBlankSpaces,true,currentValue))
        }
        if (StirngChecker.checkIfMultipleZeros(value)) {
          console.log("multpe zeros")
          this.fomsGroup.patchValue(propertyToUpdate(value,StirngChecker.removeAllExtraZeros,true,currentValue))
        }
        currentValue = Number(value)
      }
      else {

        this.fomsGroup.patchValue(propertyToUpdate(value, () => { }, false,currentValue))
      }

    }
    else {
      console.log(console.log(value,"is not a number"))
      this.fomsGroup.patchValue(propertyToUpdate(value, () => { }, false,currentValue))
    }

  }
}

