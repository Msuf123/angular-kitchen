import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import BaseQuestion from '../../../../custom-class/questions-class/creator-write-sec/base.question';
import { ReadFilesService } from '../../../../services/readFile-single/read-files.service';

@Component({
  selector: 'app-individual-input-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './individual-input-form.component.html',
  styleUrl: './individual-input-form.component.css'
})
export class IndividualInputFormComponent {
  filereaderService=inject(ReadFilesService)
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
async fileUploaded(event:any){
const response=await this.filereaderService.raedFile(event.target)
this.url=response as string
}

deleteImage(){
  this.url=''
}
}

