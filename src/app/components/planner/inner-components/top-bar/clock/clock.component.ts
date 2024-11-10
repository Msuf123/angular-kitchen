import { Component, inject } from '@angular/core';
import { ClockPlannerService } from './store/clock-planner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css',
  providers:[ClockPlannerService]
})
export class ClockComponent {
  clockService=inject(ClockPlannerService)
  currentTime$=this.clockService.getDate$
  constructor(){
    this.clockService.changeDateEffect()
  }
}
