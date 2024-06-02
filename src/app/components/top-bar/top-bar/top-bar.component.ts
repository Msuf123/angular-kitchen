import { Component, inject } from '@angular/core';
import { TopBarService } from '../../../services/top-bar/top-bar.service';
import { TopBarOptionsComponent } from '../top-bar-options/top-bar-options.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [TopBarOptionsComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  providers:[TopBarService]
})
export class TopBarComponent {
 iconService=inject(TopBarService)
 icon=this.iconService.icon
}
