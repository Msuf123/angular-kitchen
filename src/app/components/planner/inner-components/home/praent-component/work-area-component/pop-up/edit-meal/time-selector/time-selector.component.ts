import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { StirngChecker } from '../../../../../../../../../GlobalFunctions/GlobalFunctionsForString';
import { NgIf } from '@angular/common';
import { period } from '../edit-meal-interfaces';
import { PeriodMeridiemComponent } from '../period-meridiem/period-meridiem.component';

@Component({
  selector: 'app-time-selector',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,PeriodMeridiemComponent],
  templateUrl: './time-selector.component.html',
  styleUrl: './time-selector.component.css',
  providers:[]
})
export class TimeSelectorComponent{
  @Input() formGroup!:FormGroup
  @Input() formGroupName!:string
  @Input() value: string = 'A.M'; // Default value

 
}

