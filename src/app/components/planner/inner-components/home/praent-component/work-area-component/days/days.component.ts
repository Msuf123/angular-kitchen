import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-days',
  standalone: true,
  imports: [],
  templateUrl: './days.component.html',
  styleUrl: './days.component.css'
})
export class DaysComponent {
 @Input() times$!:Observable<number[]>
 addDays(){
  
 }
}
