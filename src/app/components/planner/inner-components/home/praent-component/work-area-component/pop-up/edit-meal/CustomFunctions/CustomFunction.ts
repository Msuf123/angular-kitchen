import { StirngChecker } from "../../../../../../../../../GlobalFunctions/GlobalFunctionsForString";

export class CustomFunctions{
    static getFoodsArrayBasedOnTheInput(inputObject:string){
       let filteredString=StirngChecker.blankString(inputObject)
       if(filteredString!=="undefined"){
        let arrayOfItems=filteredString.split(',')
        return arrayOfItems
       }else{
        return ['']
       }
    }
}