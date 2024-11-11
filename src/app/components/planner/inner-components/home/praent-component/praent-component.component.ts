import { Component } from '@angular/core';
import { WorkAreaComponent } from './work-area-component/work-area.component';

@Component({
  selector: 'app-praent-component',
  standalone: true,
  imports: [WorkAreaComponent],
  templateUrl: './praent-component.component.html',
  styleUrl: './praent-component.component.css'
})
export class PraentHomeComponent {

}
