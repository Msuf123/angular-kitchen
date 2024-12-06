import { daysValue, IndividualData, WorkAreaData } from "./work-area-local-store.service"

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
    modifiedArray.push({xAxis:xCoordinateToInsert,yAxis:i,lable:'',totalCaloreis:0,foods:[],timeBefore:{hours:"0",minutes:"0",period:"A.M"},timeOnEat:{hours:"0",minutes:"0",period:"P.M"}})
  }
  return modifiedArray

}
export function AddDays(currentState:WorkAreaData):IndividualData[]{
  let currentNumberOfTime=currentState.data.xAxis.length
  let yCoordinateToInsert=currentState.data.yAxis.length
  let modifiedArray:IndividualData[]=[...currentState.data.mealsData]
  for(let i=0;i<currentNumberOfTime;i++){
    modifiedArray.push({ xAxis: i, yAxis: yCoordinateToInsert, lable: '', totalCaloreis: 0, foods: [], timeBefore: { hours: "0", minutes: "0", period: "A.M" }, timeOnEat: { hours: "0", minutes: "0", period: "P.M" } })
  }
  return modifiedArray
}
export function EditRepeatingData(day:daysValue,index:number,state:daysValue[][]):daysValue[][]{
  let arrayToEdit=state[index]
  if(arrayToEdit.includes(day)){
    const startIndex=arrayToEdit.indexOf(day)
     arrayToEdit.splice(startIndex,1)
  }
  else{
    arrayToEdit.push(day)
  }
  return state
}
export function EditMeals(inputObject:IndividualData,allState:IndividualData[]):IndividualData[]{
  let originalArray=[...allState]
  for(let i=0;i<allState.length;i++){
     if(originalArray[i].xAxis===inputObject.xAxis&&originalArray[i].yAxis===inputObject.yAxis){
      originalArray[i]=inputObject
     }
  }
  return originalArray
}