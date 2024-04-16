import { Component, inject } from '@angular/core';
import { IndividualCardService } from '../../../services/explore-card/individual-card.service';
import { CommonModule } from '@angular/common';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule,DifficultyLevelComponent],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  individualCard=inject(IndividualCardService)
  items=this.individualCard.recipies
}
