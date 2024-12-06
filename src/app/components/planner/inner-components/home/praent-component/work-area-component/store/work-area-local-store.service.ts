import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { AddDays, AddTime, EditDay, EditMeals, EditRepeatingData, EditTime } from './custom-function-of-store';
import { FormStructure, FormStructureTime } from '../pop-up/edit-meal/edit-meal-interfaces';
import { initialMealsData } from './initialData';

export interface WorkAreaData{
  loading:boolean,
  data:{
    nameOfMeal:string
    xAxis:string[]
    yAxis:string[]
    yAxisDaysToRepeat:daysValue[][]
    mealsData:IndividualData[]
  }
}
export interface IndividualData{
  xAxis:number,
  yAxis:number,
  lable: string,
  timeBefore:FormStructureTime,
  timeOnEat:FormStructureTime
  totalCaloreis:number,
  foods:string[]
}
interface InputActionOfEditDate{
  index:number[],
  vlaue:string
}
export type daysValue="S"|"M"|"T"|"W"|"Th"|"F"|"Sa"
@Injectable()

export class WorkAreaLocalStoreService extends ComponentStore<WorkAreaData> {

  constructor() {
    let initialState:WorkAreaData={
      loading:true,
      data:{
        nameOfMeal:'Untitled1',
        xAxis:['Morning','Afternoon','Evening'],
        yAxis:['Day1','Day2'],
        yAxisDaysToRepeat:[[],[]],
        mealsData:initialMealsData
      }
    } 
    super(initialState)
  }
  
  readonly getLoadingStatus$=this.select((state)=>state.loading)
  readonly getAllData$=this.select((state)=>state.data)
  readonly getXAxis$=this.select(this.getAllData$,(state)=>state.xAxis)
  readonly getYAxis$=this.select(this.getAllData$,(state)=>state.yAxis)
  readonly getMeals$=this.select(this.getAllData$,(state)=>state.mealsData)
  readonly getDaysToRepeat$=this.select(this.getAllData$,(state)=>state.yAxisDaysToRepeat)
  readonly addTimes=this.updater((state:WorkAreaData,vlaue:string)=>({...state,data:{...state.data,xAxis:[...state.data.xAxis,vlaue],mealsData:AddTime(state)}}))
  readonly addDays=this.updater((state:WorkAreaData)=>({...state,data:{...state.data,yAxis:[...state.data.yAxis,'Days'+(state.data.yAxis.length+1)],yAxisDaysToRepeat:[...state.data.yAxisDaysToRepeat,[]],mealsData:AddDays(state)}}))
  readonly editTime=this.updater((state:WorkAreaData,actionLoad:InputActionOfEditDate)=>({...state,data:{...state.data,xAxis:EditTime(state.data.xAxis,actionLoad.vlaue,actionLoad.index)}}))
  readonly editDay=this.updater((state:WorkAreaData,actionLoad:InputActionOfEditDate)=>({...state,data:{...state.data,yAxis:EditDay(state.data.yAxis,actionLoad.vlaue,actionLoad.index)}}))
  readonly editPlanName=this.updater((state:WorkAreaData,action:string)=>({...state,data:{...state.data,nameOfMeal:action}}))
  readonly editDayRepeat=this.updater((state:WorkAreaData,action:{day:daysValue,index:number})=>({...state,data:{...state.data,yAxisDaysToRepeat:EditRepeatingData(action.day,action.index,state.data.yAxisDaysToRepeat)}}))
  readonly editMeal=this.updater((state:WorkAreaData,action:any)=>({...state,data:{...state.data,mealsData:EditMeals(action,state.data.mealsData)}}))
}
