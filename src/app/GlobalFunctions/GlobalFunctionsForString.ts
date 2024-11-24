export class StirngChecker{
    static blankString(inputString:string):string{
      let modifiedString=""
      for(let i=0;i<inputString.length-1;i++){
         if(inputString[i]===" " && inputString[i+1]===" "){
            continue
         }
         else{
            modifiedString+=inputString[i]
         }

      }
      modifiedString+=inputString[inputString.length-1]
      return modifiedString
    }
}