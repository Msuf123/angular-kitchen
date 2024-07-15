import { Component } from '@angular/core';
import { LeftOptionsBarComponent } from './left-options-bar/left-options-bar.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [LeftOptionsBarComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
