import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { AddDays, AddTime, EditDay, EditRepeatingData, EditTime } from './custom-function-of-store';

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
  mealName:string,
  calories:number,
  mealsItem:string[]
}
interface InputActionOfEditDate{
  index:number[],
  vlaue:string
}
export type daysValue="S"|"M"|"T"|"W"|"Th"|"F"|"Sa"|""
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
        mealsData:[{xAxis:0,yAxis:0,mealName:'',calories:0,mealsItem:[]},{xAxis:1,yAxis:0,mealName:'',calories:0,mealsItem:[]},{xAxis:2,yAxis:0,mealName:'',calories:0,mealsItem:[]}
        ,{xAxis:0,yAxis:1,mealName:'',calories:500,mealsItem:[]},{xAxis:1,yAxis:1,mealName:'',calories:500,mealsItem:[]},{xAxis:2,yAxis:1,mealName:'',calories:500,mealsItem:[]}
      ]
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
  readonly editMeal=this.updater((state:WorkAreaData,actionLoad:IndividualData)=>({...state,data:state.data}))
  readonly editPlanName=this.updater((state:WorkAreaData,action:string)=>({...state,data:{...state.data,nameOfMeal:action}}))
  readonly editDayRepeat=this.updater((state:WorkAreaData,action:{day:daysValue,index:number})=>({...state,data:{...state.data,yAxisDaysToRepeat:EditRepeatingData(action.day,action.index,state.data.yAxisDaysToRepeat)}}))
}
