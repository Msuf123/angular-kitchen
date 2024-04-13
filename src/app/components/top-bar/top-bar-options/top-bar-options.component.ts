import { Component, inject } from '@angular/core';

import { ThemeButtonComponent } from './theme-button/theme-button/theme-button.component';
import { TopBarService } from '../../../services/top-bar/top-bar.service';

@Component({
  selector: 'app-top-bar-options',
  standalone: true,
  imports: [ThemeButtonComponent],
  templateUrl: './top-bar-options.component.html',
  styleUrl: './top-bar-options.component.css'
})
export class TopBarOptionsComponent {
 icons=inject(TopBarService)
 userIcon=this.icons.loginIcon
}
