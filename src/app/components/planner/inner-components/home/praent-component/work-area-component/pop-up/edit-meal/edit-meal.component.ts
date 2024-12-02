import { Component, CSP_NONCE, inject } from '@angular/core';
import { TimeSelectorComponent } from './time-selector/time-selector.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StirngChecker } from '../../../../../../../../GlobalFunctions/GlobalFunctionsForString';
import { FormStructure } from './edit-meal-interfaces';

@Component({
  selector: 'app-edit-meal',
  standalone: true,
  imports: [TimeSelectorComponent,ReactiveFormsModule],
  templateUrl: './edit-meal.component.html',
  styleUrl: './edit-meal.component.css'
})
export class EditMealComponent {
  fomsService=inject(FormBuilder)
  oldValuesOfForm= this.fomsService.group({
    lable: ['old form',],
    timeBefore: this.fomsService.group({
      hours: ['', Validators.required],
      minutes: ['', Validators.required]
    }),
    timeOnEat: this.fomsService.group({
      hours: ['', Validators.required],
      minutes: ['', Validators.required]
    }),
    foods: ['', Validators.required],
    totalCaloreis: ['', Validators.required]
})
  fomsGroup=this.fomsService.group({
    lable:['',],
    timeBefore:this.fomsService.group({
      hours:['',Validators.required],
      minutes:['',Validators.required]
    }),
    timeOnEat:this.fomsService.group({
      hours:['',Validators.required],
      minutes:['',Validators.required]
    }),
    foods:['',Validators.required],
    totalCaloreis:['',Validators.required]
  })
  constructor(){
   console.log(this.oldValuesOfForm.get("timeBefore")?.get("hours")?.value)
   
    this.fomsGroup.valueChanges.subscribe((formState)=>{
     
      if (this.oldValuesOfForm.get('timeBefore')?.value.hours !==formState.timeBefore?.hours){
        this.controlUserInput(formState.timeBefore?.hours as string, 13, (value: string, functionToExecute: any, customFunction: boolean, oldValue: number) => ({
          timeBefore: { hours: customFunction ? functionToExecute(value) : oldValue.toString() }
        }), this.oldValuesOfForm)
        this.controlUserInput(formState.timeBefore?.hours as string, 13,(value:string,functionToExecute:any,customFunction:boolean,oldValue:number)=>({
          timeBefore: { hours: customFunction ? functionToExecute(value) : oldValue.toString() } 
        }),this.fomsGroup)
      }
      else if (this.oldValuesOfForm.get('timeBefore')?.value.minutes !==formState.timeBefore?.minutes){
        this.controlUserInput(formState.timeBefore?.minutes as string, 61, (value: string, functionToExecute: any, customFunction: boolean, oldValue: number) => ({
          timeBefore: { minutes: customFunction ? functionToExecute(value) : oldValue.toString() }
        }), this.oldValuesOfForm)
        this.controlUserInput(formState.timeBefore?.minutes as string, 61,(value:string,functionToExecute:any,customFunction:boolean,oldValue:number)=>({
          timeBefore: { minutes :customFunction?functionToExecute(value):oldValue.toString()}
        }), this.fomsGroup)
      }
      

      else if (this.oldValuesOfForm.get('timeOnEat')?.value.hours !== formState.timeOnEat?.hours) {
        console.log("Changing the user input of the hours")
        this.controlUserInput(formState.timeOnEat?.hours as string, 13, (value: string, functionToExecute: any, customFunction: boolean, oldValue: number) => ({
          timeOnEat: { hours: customFunction ? functionToExecute(value) : oldValue.toString() }
        }), this.oldValuesOfForm)
         this.controlUserInput(formState.timeOnEat?.hours as string, 13,(value: string, functionToExecute: any, customFunction: boolean, oldValue: number) => ({
          timeOnEat: { hours: customFunction ? functionToExecute(value) : oldValue.toString() }
        }), this.fomsGroup)
        
      }
      else if (this.oldValuesOfForm.get('timeOnEat')?.get('minutes')?.value !== formState.timeOnEat?.minutes) {
        console.log("Changing the user input of the minutes")
        this.controlUserInput(formState.timeOnEat?.minutes as string, 61, (value: string, functionToExecute: any, customFunction: boolean, oldValue: number) => ({
          timeOnEat: { minutes: customFunction ? functionToExecute(value) : oldValue.toString() }
        }), this.oldValuesOfForm)
        this.controlUserInput(formState.timeOnEat?.minutes as string, 61, (value: string, functionToExecute: any, customFunction: boolean, oldValue: number) => ({
          timeOnEat: { minutes: customFunction ? functionToExecute(value) : oldValue.toString() }
        }), this.fomsGroup)
       
      }
      // this.controlUserInput(formState.timeOnEat?.hours as string, 13, (value:string,functionToExecute:any,customFunction:boolean,oldValue:number)=>(
      //   { timeOnEat: { hours: customFunction?functionToExecute(value):oldValue.toString() } }))
    })
  }
  controlUserInput(value: string, valueThatShouldBeMax: number,propertyToUpdate:any,formToUpdate:FormGroup) {
    let currentValue = 0
    
    console.log(value)
    if (!Number.isNaN(Number(value))) {

      if (Number(value) < valueThatShouldBeMax) {
        if (value.includes(' ')) {
          formToUpdate.patchValue(propertyToUpdate(value,StirngChecker.removeAllBlankSpaces,true,currentValue))
          
        }
        if (StirngChecker.checkIfMultipleZeros(value)) {
        
          formToUpdate.patchValue(propertyToUpdate(value,StirngChecker.removeAllExtraZeros,true,currentValue))
        }
        if (formToUpdate.value.lable ==="old form"){
          formToUpdate.patchValue(propertyToUpdate(value, ()=>{},false, value))
        }
        currentValue = Number(value)
      }
      else {

        formToUpdate.patchValue(propertyToUpdate(value, () => { }, false,currentValue))
      }

    }
    else {
    
      formToUpdate.patchValue(propertyToUpdate(value, () => { }, false,currentValue))
    }

  }
  formSubmission(){
    if (this.fomsGroup.get('foods')?.hasError('required')){
      console.log("Has error")
    }
    else{
    console.log('Form submistted with value',this.fomsGroup.value)
    }
  }
}

