import { Inject, Injectable, inject } from '@angular/core';
import BaseQuestion from '../../custom-class/questions-class/creator-write-sec/base.question';
import TextBox from '../../custom-class/questions-class/creator-write-sec/ChildClasses/text.box';
import { Validator,Validators } from '@angular/forms';
import Slider from '../../custom-class/questions-class/creator-write-sec/ChildClasses/slider.box';
import { Files } from '../../custom-class/questions-class/creator-write-sec/ChildClasses/file.box';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../../app.config';
import { Observable, switchMap } from 'rxjs';
import { setLoadingTrue } from '../../pipe-operators/creator-section/http-loading.pipe';
import { LoadingService } from '../loading/loading.service';
import { TextArea } from '../../custom-class/questions-class/creator-write-sec/ChildClasses/TextArea.box';
import { uniqueNamesGenerator ,adjectives, colors, animals} from 'unique-names-generator';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  loadingService=inject(LoadingService)
  httpService=inject(HttpClient)
 
  post(url_t:string,body:any,header?:any){
    header=header?header:null
    return this.httpService.post(url_t,body,{observe:'body',responseType:'text',withCredentials:true})
  }
  constructor(private service:HttpClient,@Inject(url)private url:string) { }
  question(){
   
    let arrayOfQuestions:BaseQuestion[]=[
      new TextBox({lable:'Name of recipe',key:'name',required:true}),
      new Slider({lable:'Give a difficulty ness level',key:'difficlutyLEvel'}),
      
      new Slider({lable:'Give a healthy ness leve',key:'healyLevel'}),
      new TextBox({lable:'Approx Price',key:'priceOfMeal',required:true}),
      new TextBox({lable:'Time to cook',key:'time',required:true}),
      new Files({lable:'Uplad Images',key:'image'}),
     
    ]
    return arrayOfQuestions
  }
  uploadImageToServer(dataToUpload:ArrayBuffer,url:string,fileEntension:string){
    const chunks=10000
    let timesItRan=0
    const totalChunks=dataToUpload.byteLength/chunks
    const shortName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
   
    const makeRequest=(index:number,endIndex:number,nameOfFile:string)=>{
      this.httpService.post(url,dataToUpload.slice(index,endIndex),{responseType:'text',withCredentials:true,observe:'body',headers:new HttpHeaders({'file-name':nameOfFile+'.'+fileEntension,'total-length':totalChunks+1})}).subscribe((res)=>{
        timesItRan++
        console.log(`Upload percantage=${(timesItRan/Math.round(totalChunks+1))*100}`)
        if(res==='okay'&&timesItRan<=totalChunks+1){
          makeRequest(index+chunks,endIndex+chunks,nameOfFile)
        }
      })
    }
    makeRequest(0,chunks,shortName)
  }
  getRequest(){
    return new Observable((emmiter)=>{emmiter.next('Sending req')}).pipe(setLoadingTrue(this.loadingService.state),switchMap(()=>this.service.get(this.url)))
  }
}
