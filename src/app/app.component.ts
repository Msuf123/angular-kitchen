import { Component, DoCheck, Inject, Injector, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar/top-bar.component';
import { ThemeService } from './services/theme/theme.service';
import { ExploreComponent } from './components/explore/explore.component';
import { LoadingService } from './services/loading/loading.service';
import { HttpServiceService } from './services/global-http/http-service.service';

import { CommonModule } from '@angular/common';
import { url } from './app.config';
import { ErrorFromServerComponent } from './components/global-component/error-from-server/error-from-server.component';
import { ErrorFromServerService } from './services/error/error-from-server.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopBarComponent,CommonModule,ExploreComponent,ErrorFromServerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ThemeService]
})
export class AppComponent implements DoCheck {
  themeService=inject(ThemeService)
  loadingService=inject(LoadingService)
  errorService=inject(ErrorFromServerService)
  http=inject(HttpServiceService)
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
