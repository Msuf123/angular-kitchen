import { Component } from '@angular/core';
interface daysStatus{
  day:string,
  shouldRepeat:boolean
}
@Component({
  selector: 'app-select-days-to-repeat',
  standalone: true,
  imports: [],
  templateUrl: './select-days-to-repeat.component.html',
  styleUrl: './select-days-to-repeat.component.css'
})

export class SelectDaysToRepeatComponent {
 days:daysStatus[]=[{day:'M',shouldRepeat:true},{day:'T',shouldRepeat:true}
  ,{day:'W',shouldRepeat:false},{day:'Th',shouldRepeat:true},{day:'F',shouldRepeat:false},
  {day:'Sa',shouldRepeat:true},{day:'S',shouldRepeat:false}
 ]
}
