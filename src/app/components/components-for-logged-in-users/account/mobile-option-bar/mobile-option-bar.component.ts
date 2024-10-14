import { Component } from '@angular/core';
import { MobileNavBarLinksComponent } from '../mobile-nav-bar-links/mobile-nav-bar-links.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-option-bar',
  standalone: true,
  imports: [MobileNavBarLinksComponent,CommonModule],
  templateUrl: './mobile-option-bar.component.html',
  styleUrl: './mobile-option-bar.component.css'
})
export class MobileOptionBarComponent {
  display=new BehaviorSubject(false)
  shouldNavComponentDispaly=this.display.value
  constructor(){
    this.display.subscribe((state)=>{
      this.shouldNavComponentDispaly=state
    })
  }
  toogleDisplayState(arg:boolean){
    console.log(arg,'hi')
    this.display.next(arg)
  }
}
