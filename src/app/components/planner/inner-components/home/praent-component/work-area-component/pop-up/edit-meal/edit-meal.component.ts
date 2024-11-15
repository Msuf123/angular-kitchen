import { Component } from '@angular/core';
import { TimeSelectorComponent } from './time-selector/time-selector.component';

@Component({
  selector: 'app-edit-meal',
  standalone: true,
  imports: [TimeSelectorComponent],
  templateUrl: './edit-meal.component.html',
  styleUrl: './edit-meal.component.css'
})
export class EditMealComponent {

}
