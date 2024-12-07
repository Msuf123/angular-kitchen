import { Component } from '@angular/core';
import { ClockComponent } from './clock/clock.component';
import { WorkAreaLoadingComponent } from '../work-area-loading/work-area-loading.component';
import { UploadProgressToBackendComponent } from '../home/praent-component/upload-progress-to-backend/upload-progress-to-backend.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ClockComponent,UploadProgressToBackendComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
 
}
