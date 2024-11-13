import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-days-banner',
  standalone: true,
  imports: [],
  templateUrl: './days-banner.component.html',
  styleUrl: './days-banner.component.css'
})
export class DaysBannerComponent {
 @Input() days!:string
}
