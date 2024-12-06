import { ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { period } from '../edit-meal-interfaces';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-period-meridiem',
  standalone: true,
  imports: [NgIf],
  templateUrl: './period-meridiem.component.html',
  styleUrl: './period-meridiem.component.css',
  providers:[{provide:NG_VALUE_ACCESSOR,useExisting:forwardRef(()=>PeriodMeridiemComponent),multi:true}]
})
export class PeriodMeridiemComponent implements ControlValueAccessor{
  value:period="A.M"
  counter=0  
  
  onChange:(value: any) => void =()=>{console.log("hello")}
  onTouched = () => { };
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  writeValue(obj: any): void {
    this.value=obj
  }
 
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  touch(){
    this.value = this.value === 'A.M' ? 'P.M' : 'A.M';
    this.onChange(this.value)
  }
  blured(){
    this.onTouched()
  }
  
}
