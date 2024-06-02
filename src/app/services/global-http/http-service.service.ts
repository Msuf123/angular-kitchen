import { Inject, Injectable, inject } from '@angular/core';
import BaseQuestion from '../../custom-class/questions-class/creator-write-sec/base.question';
import TextBox from '../../custom-class/questions-class/creator-write-sec/ChildClasses/text.box';
import { Validator,Validators } from '@angular/forms';
import Slider from '../../custom-class/questions-class/creator-write-sec/ChildClasses/slider.box';
import { Files } from '../../custom-class/questions-class/creator-write-sec/ChildClasses/file.box';
import { HttpClient } from '@angular/common/http';
import { url } from '../../app.config';
import { Observable, switchMap } from 'rxjs';
import { setLoadingTrue } from '../../pipe-operators/creator-section/http-loading.pipe';
import { LoadingService } from '../loading/loading.service';
import { TextArea } from '../../custom-class/questions-class/creator-write-sec/ChildClasses/TextArea.box';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  loadingService=inject(LoadingService)
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
  getRequest(){
    return new Observable((emmiter)=>{emmiter.next('Sending req')}).pipe(setLoadingTrue(this.loadingService.state),switchMap(()=>this.service.get(this.url)))
  }
}
