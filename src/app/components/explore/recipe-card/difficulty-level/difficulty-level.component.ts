import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-difficulty-level',
  standalone: true,
  imports: [],
  templateUrl: './difficulty-level.component.html',
  styleUrl: './difficulty-level.component.css'
})
export class DifficultyLevelComponent {
@Input() level?:number
@Input() type?:string
constructor(){
  this.type='healthyLevel'
}
}
