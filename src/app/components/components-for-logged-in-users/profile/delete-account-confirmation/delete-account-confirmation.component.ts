import { Component, inject, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpServiceService } from '../../../../services/global-http/http-service.service';

@Component({
  selector: 'app-delete-account-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './delete-account-confirmation.component.html',
  styleUrl: './delete-account-confirmation.component.css'
})
export class DeleteAccountConfirmationComponent {
  @Input() deleteAccountPopUp!:BehaviorSubject<boolean>
  http=inject(HttpServiceService)
  cancelDelete(){
    this.deleteAccountPopUp.next(false)
  }
  delete(){
    this.http.get("/")
  }
 

}
