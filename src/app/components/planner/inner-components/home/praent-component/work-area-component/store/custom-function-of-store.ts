import { IndividualData, WorkAreaData } from "./work-area-local-store.service"

export function EditTime(arg:string[],valueToReplace:string,index:number[]):string[]{
  let filteredArray=arg.filter((value,indexArray)=>indexArray!==index[0])
  filteredArray.splice(index[0],0,valueToReplace)
  return filteredArray
}
export function EditDay(arg:string[],valueToReplace:string,index:number[]):string[]{
  let filteredArray=arg.filter((value,indexArray)=>indexArray!==index[1])
  filteredArray.splice(index[1],0,valueToReplace)
  return filteredArray
}
export function EditIndividualDay(arg:IndividualData[],index:number[],dataInput:IndividualData):IndividualData[]{
 
  return arg
}
export function AddTime(currentState:WorkAreaData):IndividualData[]{
  let currentNumberOfDays=currentState.data.yAxis.length
  let xCoordinateToInsert=currentState.data.xAxis.length
  let modifiedArray:IndividualData[]=[...currentState.data.mealsData]
  for(let i=0;i<currentNumberOfDays;i++){
    modifiedArray.push({xAxis:xCoordinateToInsert,yAxis:i,mealName:'Meal Number'+i,calories:500,mealsItem:['Rice ','Rajma']})
  }
  return modifiedArray

}
export function AddDays(currentState:WorkAreaData):IndividualData[]{
  let currentNumberOfTime=currentState.data.xAxis.length
  let yCoordinateToInsert=currentState.data.yAxis.length
  let modifiedArray:IndividualData[]=[...currentState.data.mealsData]
  for(let i=0;i<currentNumberOfTime;i++){
    modifiedArray.push({xAxis:i,yAxis:yCoordinateToInsert,mealName:'Meal Number'+i,calories:500,mealsItem:['Rice ','Rajma']})
  }
  return modifiedArray
}