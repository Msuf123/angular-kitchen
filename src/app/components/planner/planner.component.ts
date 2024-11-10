import { Component } from '@angular/core';
import { TopBarComponent } from './inner-components/top-bar/top-bar.component';
import { WorkAreaComponent } from './inner-components/work-area/work-area.component';


@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [TopBarComponent,WorkAreaComponent],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent {

}
