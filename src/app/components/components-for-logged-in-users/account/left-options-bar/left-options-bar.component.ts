import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-left-options-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-options-bar.component.html',
  styleUrl: './left-options-bar.component.css'
})
export class LeftOptionsBarComponent {
    options:{name:string,url:string}[]=[{name:'Profile',url:'./accountProfile.png'},
    {name:'Activity',url:'./userProfileActivity.png'},{name:'Saved',url:'./accountSavedIcon.png'},
     {name:'Reported',url:'./accountsReported.png'}
    ,{name:'Liked',url:'./accountLikedRecipe.png'}]
}
