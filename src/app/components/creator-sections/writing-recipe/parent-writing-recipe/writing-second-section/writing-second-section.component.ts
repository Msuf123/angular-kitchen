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
    if(this.ingridients.length===15){
      this.displayButton=true
    }
  })
  
  
}
add(el:any){
  if(el.key==="Enter"){
   this.addIngridients()
  }
  
}
deleteIngridents(index:number){
  this.ingridients.removeAt(index)
}
get ingridients(){
  return this.form.get('ingridents') as FormArray
}
addIngridients(value?:string){
  if(this.ingridients.length===15){
    this.displayButton=true
  }
  this.ingridients.push(new FormControl(value||'',{validators:[Validators.required]}))
}
}
