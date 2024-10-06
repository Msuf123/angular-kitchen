import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-writing-second-section',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './writing-second-section.component.html',
  styleUrl: './writing-second-section.component.css'
})
export class WritingSecondSectionComponent  {
@Input() form!:FormGroup
displayButton=true
time=0
timesToRunLoop=0
ngOnInit(){
  this.ingridients.statusChanges.subscribe((status)=>{
    this.displayButton=status==='INVALID'?true:false
  })
  
  // this.form.valueChanges.subscribe((value)=>{
  //   if(this.time===0){
  //     this.time++
  //     this.timesToRunLoop=this.form.get('ingridents')?.value.length 
  //     console.log(this.form.get('ingridents')?.value)
  //     console.log(this.timesToRunLoop,'k')
  //   value.ingridents.forEach((element:any) => {
  //     console.log(element)
  //     this.addIngridients(element)
  //   });
  // }
  // })
}
deleteIngridents(index:number){
  this.ingridients.removeAt(index)
}
get ingridients(){
  return this.form.get('ingridents') as FormArray
}
addIngridients(value?:string){
  this.ingridients.push(new FormControl(value||'',{validators:[Validators.required]}))
}
}
