import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-writing-third-section',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './writing-third-section.component.html',
  styleUrl: './writing-third-section.component.css'
})
export class WritingThirdSectionComponent {
@Input() form!:FormGroup
get steps(){
  return this.form.get('steps') as FormArray
}
addSteps(){
  this.steps.push(new FormGroup({
    heading:new FormControl(''),
    about:new FormControl(''),
    imageOfEachDescription:new FormControl('')
  }))
}
run(e:string){
console.log(e)
}
}
