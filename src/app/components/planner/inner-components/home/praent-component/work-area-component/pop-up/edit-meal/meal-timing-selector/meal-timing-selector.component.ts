import { Component, Input } from '@angular/core';
import { TimeSelectorComponent } from '../time-selector/time-selector.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meal-timing-selector',
  standalone: true,
  imports: [TimeSelectorComponent],
  templateUrl: './meal-timing-selector.component.html',
  styleUrl: './meal-timing-selector.component.css'
})
export class MealTimingSelectorComponent {
 @Input() timeLable!:string
 @Input() formGroup!:FormGroup
 @Input() keyOfForm!:string
}
