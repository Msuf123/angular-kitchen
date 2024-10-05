import { Component, Input } from '@angular/core';
import { ObserverApiDirective } from '../../../services/intersection-observer/observer-api.directive';

@Component({
  selector: 'app-loading-prifle-cards',
  standalone: true,
  imports: [ObserverApiDirective],
  templateUrl: './loading-prifle-cards.component.html',
  styleUrl: './loading-prifle-cards.component.css'
})
export class LoadingPrifleCardsComponent {
  @Input() url!:string
@Input('inWhichServiceToAddData') givenService!:any
}
