import { Component } from '@angular/core';
import { WorkAreaComponent } from './work-area-component/work-area.component';
import { WorkAreaTitleComponent } from './work-area-title/work-area-title.component';
import { UploadProgressToBackendComponent } from './upload-progress-to-backend/upload-progress-to-backend.component';
import { WorkAreaLocalStoreService } from './work-area-component/store/work-area-local-store.service';

@Component({
  selector: 'app-praent-component',
  standalone: true,
  imports: [WorkAreaComponent,WorkAreaTitleComponent,UploadProgressToBackendComponent],
  templateUrl: './praent-component.component.html',
  styleUrl: './praent-component.component.css',
  providers:[]
})
export class PraentHomeComponent {

}
