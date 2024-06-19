import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadFilesService {

  constructor() { }
  raedFile(target:HTMLInputElement){
     const fileList:FileList=target.files as FileList
     const firstFile:File=fileList[0]
     const fileReader=new FileReader()
     fileReader.readAsDataURL(firstFile)
    return new Promise((resolve,reject)=>fileReader.onload=()=>{
      resolve(fileReader.result)
     })
  }
}
