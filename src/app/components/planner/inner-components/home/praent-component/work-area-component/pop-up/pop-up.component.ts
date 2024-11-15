import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EditorInterfaceData } from '../work-area.component';
import { EditTimeDayComponent } from './edit-time-day/edit-time-day.component';
import { CommonModule } from '@angular/common';
import { EditMealComponent } from './edit-meal/edit-meal.component';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [EditTimeDayComponent,CommonModule,EditMealComponent],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
 @Input() typeOFAction$!:BehaviorSubject<EditorInterfaceData>
 @Input() displayPopup$!:BehaviorSubject<any>
 showCoordinates(){
  console.log(this.typeOFAction$.value?.postion)
 }
 hide(){
  this.displayPopup$.next(false)
 }
}
