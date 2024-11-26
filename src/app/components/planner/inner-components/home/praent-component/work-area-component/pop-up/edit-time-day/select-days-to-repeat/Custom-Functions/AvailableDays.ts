import { daysValue } from "../../../../store/work-area-local-store.service"

export namespace DaysOperatioin{
  export  function daysThatAreAvailable(state:daysValue[][],dayWeAreLooingFor:number):daysValue[]{
        //Exclude the day we are looking for
        let allDays:daysValue[]=["S","M","T","W","Th","F","Sa"]
        let excludingArray=state.filter((state,index)=>index!==dayWeAreLooingFor)
        let finalArray:daysValue[]=[]
   
       let totalDaysThatAreTaken:daysValue[]=[]
        for(let i of excludingArray){
            
         totalDaysThatAreTaken=[...totalDaysThatAreTaken,...i]
        }
        
        for(let i of allDays){
           
            if(!totalDaysThatAreTaken.includes(i)){
                finalArray.push(i)
            }
        
        }
        return finalArray
    }
}