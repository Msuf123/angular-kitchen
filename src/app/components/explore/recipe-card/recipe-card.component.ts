import { Component, inject } from '@angular/core';
import { IndividualCardService } from '../../../services/explore-card/individual-card.service';
import { CommonModule } from '@angular/common';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { ClickNavigationDirective } from '../../../directives/click-nav-directive/click-navigation.directive';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule,DifficultyLevelComponent,ClickNavigationDirective],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  individualCard=inject(IndividualCardService)
  items=this.individualCard.recipies
  funcc(){
    console.log('Clicked')
  }
}
