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
      if(inputString[inputString.length-1]!==" "){
         modifiedString+=inputString[inputString.length-1]
      }
    
      return modifiedString
    }
    static removeAllBlankSpaces(inputString:string):string{
      
       let modifiedString = ""
       for (let i = 0; i < inputString.length ; i++) {
          if (inputString[i] === " ") {
             continue
          }
          else {
             modifiedString += inputString[i]
          }

       }
      
       return modifiedString
     
      
    }
   static checkIfMultipleZeros(ininputStringut:string):boolean{
      let count=0
      for(let i=0;i<ininputStringut.length;i++){
         if(ininputStringut[i]==='0'){
            count++
         }
      }
      return count>1
    }
    static removeAllExtraZeros(inputString:string):string{
       let modifiedString =""
       for (let i = 0; i < inputString.length - 1; i++) {
          if (inputString[i] === "0" && inputString[i + 1] === "0") {
             continue
          }
          else {
             modifiedString += inputString[i]
          }

       }
      return modifiedString
    }
}