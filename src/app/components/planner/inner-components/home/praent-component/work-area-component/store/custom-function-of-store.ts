import { IndividualData } from "./work-area-local-store.service"

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
