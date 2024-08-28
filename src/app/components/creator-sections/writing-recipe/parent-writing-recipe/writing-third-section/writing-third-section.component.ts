import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ReadFilesService } from '../../../../../services/readFile-single/read-files.service';

@Component({
  selector: 'app-writing-third-section',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './writing-third-section.component.html',
  styleUrl: './writing-third-section.component.css'
})
export class WritingThirdSectionComponent {
@Input() form!:FormGroup
filereaderService=inject(ReadFilesService)
url!:string
get steps(){
  return this.form.get('steps') as FormArray
}
async fileUploaded(event:any){
  const response=await this.filereaderService.readFile(event.target)
  this.url=response as string
  }
addSteps(){
  this.steps.push(new FormGroup({
    heading:new FormControl(''),
    about:new FormControl(''),
    imageOfEachDescription:new FormControl('')
  }))
}
deleteImage(){
  this.url=''
}
run(e:string){
console.log(e)
}
}
