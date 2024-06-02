import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import BaseQuestion from '../../../../custom-class/questions-class/creator-write-sec/base.question';

@Component({
  selector: 'app-individual-input-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './individual-input-form.component.html',
  styleUrl: './individual-input-form.component.css'
})
export class IndividualInputFormComponent {
  classNames={focused:false}
@Input() formGroup!:FormGroup
@Input() question!:BaseQuestion
errors:boolean=false
url!:string
constructor(){
 
  
}
ngAfterViewInit(){
  this.formGroup.statusChanges.subscribe(()=>{
    this.errors=this.formGroup.get(this.question.key)?.hasError('required') as boolean 
  })
}
fileUploaded(event:any){
let files:File[]=event.target.files
const reader=new FileReader()
reader.readAsDataURL(files[0])
reader.onload=(event: ProgressEvent<FileReader>)=>{
  this.url=reader.result as string
}
}

deleteImage(){
  this.url=''
}
}

