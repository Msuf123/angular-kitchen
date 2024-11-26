import { Component } from '@angular/core';
import { WorkAreaComponent } from './work-area-component/work-area.component';
import { WorkAreaTitleComponent } from './work-area-title/work-area-title.component';

@Component({
  selector: 'app-praent-component',
  standalone: true,
  imports: [WorkAreaComponent,WorkAreaTitleComponent],
  templateUrl: './praent-component.component.html',
  styleUrl: './praent-component.component.css'
})
export class PraentHomeComponent {

}
