import { CSP_NONCE, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DisplayMessageService } from '../../../services/creator-sections/display-save-draft/display-message.service';
import { elementAt, Subject } from 'rxjs';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { FormGroup } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ErrorDraftReicpeComponent } from '../error-draft-reicpe/error-draft-reicpe.component';
import { FormsInvalidService } from '../../../services/creator-sections/error-in-forms/forms-invalid.service';
@Component({
  selector: 'app-display-save-draft',
  standalone: true,
  imports: [ErrorDraftReicpeComponent,CommonModule],
  templateUrl: './display-save-draft.component.html',
  styleUrl: './display-save-draft.component.css'
})
export class DisplaySaveDraftComponent {
 saveDraftState=inject(DisplayMessageService)
 errorService=inject(FormsInvalidService)
 @Input() form!:FormGroup
 @Output() showMsgs:EventEmitter<boolean>=new EventEmitter<boolean>();
 http=inject(HttpServiceService)
 @Input() obser!:Subject<boolean>

 disableButtons=false
 shouldSave(){
  this.disableButtons=true
  this.http.post("/write/draft", this.form.value).subscribe((resposeFromServe) => {
    if(resposeFromServe==='okay'){
      this.obser.next(true)
    }
    else{
      
      this.errorService.setHasError('Error while uploading draft')
      this.errorService.setIsThereError(true,this.obser);
      
    }
  
  });
  
 }
 exit(){
  
  this.obser.next(true)
 }
 

}
