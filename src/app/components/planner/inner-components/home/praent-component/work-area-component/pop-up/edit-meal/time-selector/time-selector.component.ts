import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StirngChecker } from '../../../../../../../../../GlobalFunctions/GlobalFunctionsForString';

@Component({
  selector: 'app-time-selector',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './time-selector.component.html',
  styleUrl: './time-selector.component.css'
})
export class TimeSelectorComponent {
  @Input() formGroup!:FormGroup
  @Input() formGroupName!:string
  constructor(){


}

}

