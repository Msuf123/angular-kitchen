import { Component, CSP_NONCE, inject, Input, OnInit } from '@angular/core';
import { TimeSelectorComponent } from './time-selector/time-selector.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StirngChecker } from '../../../../../../../../GlobalFunctions/GlobalFunctionsForString';
import { FormStructure } from './edit-meal-interfaces';
import { MealTimingSelectorComponent } from './meal-timing-selector/meal-timing-selector.component';
import { IndividualData, WorkAreaLocalStoreService } from '../../store/work-area-local-store.service';
import { CustomFunctions } from './CustomFunctions/CustomFunction';

@Component({
  selector: 'app-edit-meal',
  standalone: true,
  imports: [MealTimingSelectorComponent,ReactiveFormsModule],
  templateUrl: './edit-meal.component.html',
  styleUrl: './edit-meal.component.css'
})
export class EditMealComponent implements OnInit {
  @Input() position!: number[] | undefined
  localStoreService =inject(WorkAreaLocalStoreService)
  fomsService=inject(FormBuilder)
  currentDataInTheStore:IndividualData[]=[]
  mealsData=this.localStoreService.getMeals$
  oldValuesOfForm= this.fomsService.group({
    lable: ['old form',],
    timeBefore: this.fomsService.group({
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      period:['',Validators.required]
    }),
    timeOnEat: this.fomsService.group({
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      period: ['', Validators.required]
    }),
    foods: ['', Validators.required],
    totalCaloreis: ['', Validators.required]
})
  fomsGroup=this.fomsService.group({
    lable:['',],
    timeBefore:this.fomsService.group({
      hours:['',Validators.required],
      minutes:['',Validators.required],
      period: ['A.M', Validators.required]
    }),
    timeOnEat:this.fomsService.group({
      hours:['',Validators.required],
      minutes:['',Validators.required],
      period: ['A.M', Validators.required]
    }),
    foods:['',Validators.required],
    totalCaloreis:['',Validators.required]
  })
  constructor(){
 
   this.mealsData.subscribe((state)=>{
   this.currentDataInTheStore=state
   
   })
    this.fomsGroup.valueChanges.subscribe((formState)=>{
      console.log(formState.timeBefore)
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
      else if (this.oldValuesOfForm.get('timeBefore')?.value.period!==formState.timeBefore?.period){
        this.oldValuesOfForm.patchValue({timeBefore:{period:formState.timeBefore?.period}})
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
  ngOnInit(): void {
    if(Array.isArray(this.position)){
      for(let i=0;i<this.currentDataInTheStore.length;i++){
        if(this.currentDataInTheStore[i].xAxis===this.position[0]&&this.currentDataInTheStore[i].yAxis===this.position[1]){
          console.log(this.currentDataInTheStore[i])
          this.fomsGroup.patchValue(this.currentDataInTheStore[i] as any)
        }
      }
    }
  }
  formSubmission(){
    if (this.fomsGroup.get('foods')?.hasError('required')){
      console.log("Has error")
    }
    else{
      const objToUpdate = { ...this.fomsGroup.value, foods:CustomFunctions.getFoodsArrayBasedOnTheInput(this.fomsGroup.value.foods as string),xAxis:(this.position as number[])[0],yAxis:(this.position as number[])[1]}
    this.localStoreService.editMeal(objToUpdate)
    }
  }
}

