import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-nav-bar-links',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './mobile-nav-bar-links.component.html',
  styleUrl: './mobile-nav-bar-links.component.css'
})
export class MobileNavBarLinksComponent {
  @Output() toogleState=new EventEmitter()
  options: { name: string; url: string; nav: string }[] = [
    { name: "Profile", url: "./accountProfile.png", nav: "/account" },
    { name: "Saved", url: "./accountSavedIcon.png", nav: "saved" },
    { name: "Draft", url: "./draft.png", nav: "draft" },
    { name: "Liked", url: "./like.png", nav: "liked" },
    {name:"Published",url:'./published.png',nav:"publish"}
  ];
  click(){
    this.toogleState.emit(false)
  }
}
