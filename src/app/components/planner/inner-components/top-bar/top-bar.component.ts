import { Component } from '@angular/core';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ClockComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
 
}
