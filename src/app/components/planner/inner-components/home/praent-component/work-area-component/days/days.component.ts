import { Component, inject, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EditorInterfaceData } from '../work-area.component';
import { IndividualData, WorkAreaLocalStoreService } from '../store/work-area-local-store.service';

@Component({
  selector: 'app-days',
  standalone: true,
  imports: [],
  templateUrl: './days.component.html',
  styleUrl: './days.component.css'
})
export class DaysComponent {
 @Input() times$!:Observable<number[]>
 @Input() dislayEditor$!:BehaviorSubject<boolean>
 @Input() inputEditorType$!:BehaviorSubject<EditorInterfaceData>
 @Input() index!:number[]
 @Input() mealLable!:IndividualData
 constructor(){
 
 }
 addDays(){
  
 }
 addRecipe(){
  this.dislayEditor$.next(true)
 }
 editIndividualDay(){
  
  this.inputEditorType$.next({postion:this.index as number[],type:"mainDay"})
  this.dislayEditor$.next(true)
 }
}
