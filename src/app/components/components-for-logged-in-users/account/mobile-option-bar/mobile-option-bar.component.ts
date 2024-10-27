import { Component, inject } from '@angular/core';
import { MobileNavBarLinksComponent } from '../mobile-nav-bar-links/mobile-nav-bar-links.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../../../services/account/profile/profile.service';

@Component({
  selector: 'app-mobile-option-bar',
  standalone: true,
  imports: [MobileNavBarLinksComponent,CommonModule],
  templateUrl: './mobile-option-bar.component.html',
  styleUrl: './mobile-option-bar.component.css'
})
export class MobileOptionBarComponent {
  profileService=inject(ProfileService)
  display=this.profileService.showNavBar.value
  
  constructor(){
    this.profileService.showNavBar.subscribe((state)=>{
      this.display=state
    })
  }
  toogleDisplayState(arg:boolean){

    this.profileService.showNavBar.next(arg)
  }
}
