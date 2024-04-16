import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../../services/theme/theme.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css'
})
export class ThemeButtonComponent {
 name:boolean=false
 themeService=inject(ThemeService)
 constructor(){
  this.themeService.theme.next(this.name)
 }
 changeTheme(){
  this.themeService.theme.next(this.name)
 }
 
}
