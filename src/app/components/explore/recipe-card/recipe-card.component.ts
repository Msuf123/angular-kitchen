import { Component, inject } from '@angular/core';
import { IndividualCardService } from '../../../services/explore-card/individual-card.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { ClickNavigationDirective } from '../../../directives/click-nav-directive/click-navigation.directive';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule,DifficultyLevelComponent,ClickNavigationDirective,NgOptimizedImage],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  individualCard=inject(IndividualCardService)
  items=this.individualCard.recipies
  placeholder:any={'background-image':'url(https://res.cloudinary.com/demo/image/upload/c_fill,h_20,w_20/docs/camera-640.jpg)',"background-repeat": " no-repeat;","background-size": "cover;", "filter": "blur(1.5rem);"}
  hi(){
    console.log('I laoded')
    this.placeholder={'background-image':'none'}
  }
}
