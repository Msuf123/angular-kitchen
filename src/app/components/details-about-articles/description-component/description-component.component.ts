import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-component',
  standalone: true,
  imports: [],
  templateUrl: './description-component.component.html',
  styleUrl: './description-component.component.css'
})
export class DescriptionComponentComponent {
@Input() data!:string
}
