import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {
 buttons:{path:string,img:string}[]=[{path:'Home',img:'../../../../assets/home.png'},{path:'Inbox',img:'inbox.png'},{path:'Write',img:'edit.png'},{path:'Profile',img:'user.png'}]
}
