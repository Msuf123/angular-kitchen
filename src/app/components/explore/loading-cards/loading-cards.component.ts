import { Component, Input } from '@angular/core';
import { ObserverApiDirective } from '../../../services/intersection-observer/observer-api.directive';

@Component({
  selector: 'app-loading-cards',
  standalone: true,
  imports: [ObserverApiDirective],
  templateUrl: './loading-cards.component.html',
  styleUrl: './loading-cards.component.css'
})
export class LoadingCardsComponent {
 @Input() url!:string
@Input('inWhichServiceToAddData') givenService!:any
@Input() loadingState!:any
}
