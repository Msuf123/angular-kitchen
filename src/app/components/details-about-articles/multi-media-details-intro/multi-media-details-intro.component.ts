import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { CSP_NONCE, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-multi-media-details-intro',
  standalone: true,
  imports: [AsyncPipe,NgOptimizedImage],
  templateUrl: './multi-media-details-intro.component.html',
  styleUrl: './multi-media-details-intro.component.css'
})
export class MultiMediaDetailsIntroComponent implements OnChanges{
   @Input() imageUrl!:any
   src?:any
   ngOnChanges(changes: SimpleChanges): void {
     this.src=changes['imageUrl'].currentValue
   }
   constructor(){
    
   }
}
