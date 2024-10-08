import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-draft-reicpe',
  standalone: true,
  imports: [],
  templateUrl: './error-draft-reicpe.component.html',
  styleUrl: './error-draft-reicpe.component.css'
})
export class ErrorDraftReicpeComponent {
 router=inject(Router)
 nav(){
  this.router.navigate(['account','draft'])
 }
}
