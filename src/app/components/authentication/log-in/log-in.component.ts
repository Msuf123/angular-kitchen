import { Component, inject } from '@angular/core';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  clientService=inject(HttpServiceService)
 constructor(){
 // this.clientService.post('http://localhost:3000/tokenGen').subscribe((a)=>console.log(a))
 }
}
