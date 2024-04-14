import { Component, DoCheck, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar/top-bar.component';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ThemeService]
})
export class AppComponent implements DoCheck {
  themeService=inject(ThemeService)
  currentTheme:any
  darkMode:boolean
  constructor(){
    this.darkMode=this.themeService.theme.getValue()
    this.currentTheme=this.themeService.theme.subscribe((e)=>{
      this.darkMode=e
    })
  }
  ngDoCheck(){
    
  }
  title = 'kitchen';
}
