import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-left-options-bar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./left-options-bar.component.html",
  styleUrl: "./left-options-bar.component.css",
})
export class LeftOptionsBarComponent {
  options: { name: string; url: string; nav: string,class?:string }[] = [
    { name: "Profile", url: "./accountProfile.png", nav: "/account",class:'noActive' },
    { name: "Saved", url: "./accountSavedIcon.png", nav: "saved" },
    { name: "Draft", url: "./draft.png", nav: "draft" },
    { name: "Liked", url: "./like.png", nav: "liked" },
    {name:"Published",url:'./published.png',nav:"publish"}
  ];
}
