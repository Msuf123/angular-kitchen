import { CSP_NONCE, Component, Input, inject } from '@angular/core';
import { DisplayMessageService } from '../../../services/creator-sections/display-save-draft/display-message.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display-save-draft',
  standalone: true,
  imports: [],
  templateUrl: './display-save-draft.component.html',
  styleUrl: './display-save-draft.component.css'
})
export class DisplaySaveDraftComponent {
 saveDraftState=inject(DisplayMessageService)
 @Input() obser!:Subject<boolean>
 shouldSave(){
  console.log("Saving the text on the backed")
  this.obser.next(true)
 }
 exit(){
  console.log("exiting without saving")
  this.obser.next(true)
 }

}
