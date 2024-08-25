import { CSP_NONCE, Component, inject } from '@angular/core';
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
 shouldSave(){
  console.log("Saving the text on the backed")
  this.saveDraftState.exit.next(true)
 }
 exit(){
  this.saveDraftState.exit.next(true)
 }
 canDeactivate(){
  if(this.saveDraftState.shouldDisplay){
    return this.saveDraftState
  }
  return true
 }
}
