import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadFilesService {

  constructor() { }
  readFile(target:HTMLInputElement){
     const fileList:FileList=target.files as FileList
     const firstFile:File=fileList[0]
     const fileReader=new FileReader()
     fileReader.readAsDataURL(firstFile)
    return new Promise((resolve,reject)=>fileReader.onload=()=>{
      resolve(fileReader.result)
     })
  }
  readBuffer(target:HTMLInputElement){
    console.log(target,"Indise fo serivce")
    const fileList:FileList=target.files as FileList
    const firstFile:File=fileList[0]
    const fileReader=new FileReader()
     fileReader.readAsArrayBuffer(firstFile)
    return new Promise((resolve,reject)=>fileReader.onload=()=>{
      resolve(fileReader.result)
     })
  }
}
