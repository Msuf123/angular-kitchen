import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-procedure-component',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './procedure-component.component.html',
  styleUrl: './procedure-component.component.css'
})
export class ProcedureComponentComponent implements OnInit ,OnChanges{
     @Input() steps!:any
    ngOnInit(): void {
      this.steps.forEach((element:any) => {
        console.log(element['image_url'])
        let urls=element['image_url'].split(['upload'])
        
        element['image_url']=urls[1]
      });
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log('hi')
    }
  }
