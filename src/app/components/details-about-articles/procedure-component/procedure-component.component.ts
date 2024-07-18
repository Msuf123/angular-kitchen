import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-procedure-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './procedure-component.component.html',
  styleUrl: './procedure-component.component.css'
})
export class ProcedureComponentComponent {
     @Input() steps!:any
}
