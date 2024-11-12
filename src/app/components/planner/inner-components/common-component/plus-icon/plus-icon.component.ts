import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plus-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plus-icon.component.html',
  styleUrl: './plus-icon.component.css'
})
export class PlusIconComponent {
  classes={mouseLeft:true,mouseOver:false}
  classesForRight={mouseLeftRight:true,mouseOverRight:false}
  leftPostion=100
  opacityLeft=0
  rightPostion=6
  opacityRight=0
  
  entered(){
    for(let i=0;i<10;i++){
      setTimeout(()=>{
        this.leftPostion-=10
        this.rightPostion+=4.3
        this.opacityLeft+=0.1
      },i*10)
      
    }
  }
  left(){
    for(let i=0;i<10;i++){
      setTimeout(()=>{
        this.leftPostion+=10
        this.rightPostion-=4.3
        this.opacityLeft-=0.1
      },i*10)
      
    }
   
  }
  
}
