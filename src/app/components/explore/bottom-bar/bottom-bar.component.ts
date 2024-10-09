import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {
  router=inject(Router)
 buttons:{path:string,img:string,nav:string}[]=[{path:'Home',img:'home.png',nav:''},{path:'Write',img:'edit.png',nav:'write'},{path:'Profile',img:'user.png',nav:'account'}]
 nav(path:string){
  this.router.navigate([path])
 }
}
