import { Injectable } from '@angular/core';
import { TextBox } from '../../components/global-component/classes/sub-classes/textbox-class';
import { BaseClass } from '../../components/global-component/classes/base-class';

@Injectable({
  providedIn: 'root'
})
export class FormQuestionService {
  question:BaseClass[]=[
    new TextBox({key:'name',lables:'Enter Your name punk'})
  ]
  constructor() {
    
   }
  getInputs(){
    return this.question
  }
}
