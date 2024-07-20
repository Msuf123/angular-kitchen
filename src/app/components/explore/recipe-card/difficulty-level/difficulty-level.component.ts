import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-difficulty-level',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './difficulty-level.component.html',
  styleUrl: './difficulty-level.component.css'
})
export class DifficultyLevelComponent implements OnInit{
@Input() level!:string
@Input() type!:string
colorArray:string[]=['rgb(255, 63, 63)','rgb(252, 210, 23)','rgb(99, 230, 12)']
colorValue!:string
numbersArray!:number[]
constructor(){
  this.type='Healthiness'
  
 
}
ngOnInit(): void {
  this.numbersArray=Array.from({length:Number(this.level)},(_,index)=>index+1)
 
    switch (this.level){
      case "1":
        this.type==='Healthiness'?this.colorValue=this.colorArray[0]:this.colorValue=this.colorArray[2]
        break;
      case "2":
        this.type==='Healthiness'?this.colorValue=this.colorArray[1]:this.colorValue=this.colorArray[1]
        break
      case "3":
        this.type==='Healthiness'? this.colorValue=this.colorArray[2]:this.colorValue=this.colorArray[0]
        break
      default:
        this.colorValue='black'
      }
  
}
}
interface Colors{
  level:number,value:string
}
