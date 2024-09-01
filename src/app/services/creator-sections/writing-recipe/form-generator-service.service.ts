import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import BaseQuestion from '../../../custom-class/questions-class/creator-write-sec/base.question';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorServiceService {

  constructor() { }
  getFormObject(arrayOfQuestions:BaseQuestion[]){
    let  object:any={
      
      ingridents:new FormArray([new FormControl('',{validators:[Validators.required]})]),
      steps:new FormArray([new FormGroup({
        heading:new FormControl(''),
        about:new FormControl(''),
        imageUrl:new FormControl('')
      })])
    }
    arrayOfQuestions.forEach(element => {
      object[element.key]= element.required?new FormControl('',{validators:[Validators.required]}): new FormControl(element.defaultValue)

    });
    return new FormGroup(object)
  }
 
}
