import { Component } from '@angular/core';
import { TopBarComponent } from './inner-components/top-bar/top-bar.component';

import { RouterModule } from '@angular/router';
import { PlusIconComponent } from './inner-components/common-component/plus-icon/plus-icon.component';


@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [TopBarComponent,RouterModule,PlusIconComponent],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent {

}
