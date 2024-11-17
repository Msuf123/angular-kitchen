import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { AddDays, AddTime, EditDay, EditTime } from './custom-function-of-store';

export interface WorkAreaData{
  loading:boolean,
  data:{
    xAxis:string[]
    yAxis:string[]
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
@Injectable()

export class WorkAreaLocalStoreService extends ComponentStore<any> {

  constructor() {
    let initialState:WorkAreaData={
      loading:true,
      data:{
        xAxis:['Morning'],
        yAxis:['Day1','Day2'],
        mealsData:[{xAxis:0,yAxis:0,mealName:'',calories:500,mealsItem:['Rice ','Rajma']},{xAxis:0,yAxis:1,mealName:'Meal One',calories:500,mealsItem:['Rice ','Rajma']}]
      }
    } 
    super(initialState)
  }
  readonly getLoadingStatus$=this.select((state)=>state.loading)
  readonly getAllData$=this.select((state)=>state.data)
  readonly getXAxis$=this.select(this.getAllData$,(state)=>state.xAxis)
  readonly getYAxis$=this.select(this.getAllData$,(state)=>state.yAxis)
  readonly getMeals$=this.select(this.getAllData$,(state)=>state.mealsData)
  readonly addTimes=this.updater((state:WorkAreaData,vlaue:string)=>({...state,data:{...state.data,xAxis:[...state.data.xAxis,vlaue],mealsData:AddTime(state)}}))
  readonly addDays=this.updater((state:WorkAreaData)=>({...state,data:{...state.data,yAxis:[...state.data.yAxis,'Days'+(state.data.yAxis.length+1)],mealsData:AddDays(state)}}))
  readonly editTime=this.updater((state:WorkAreaData,actionLoad:InputActionOfEditDate)=>({...state,data:{...state.data,xAxis:EditTime(state.data.xAxis,actionLoad.vlaue,actionLoad.index)}}))
  readonly editDay=this.updater((state:WorkAreaData,actionLoad:InputActionOfEditDate)=>({...state,data:{...state.data,yAxis:EditDay(state.data.yAxis,actionLoad.vlaue,actionLoad.index)}}))
  readonly editMeal=this.updater((state:WorkAreaData,actionLoad:IndividualData)=>({...state,data:state.data}))
}
