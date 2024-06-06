import { Component, inject } from '@angular/core';
import { HttpServiceService } from '../../../services/global-http/http-service.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  clientService=inject(HttpServiceService)
 constructor(){
  this.clientService.get('http://localhost:3000/tokenGen').subscribe((a)=>console.log(a))
 }
}
