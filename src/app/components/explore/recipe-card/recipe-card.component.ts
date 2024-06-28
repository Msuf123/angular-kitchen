import { Component, inject } from '@angular/core';
import { IndividualCardService } from '../../../services/explore-card/individual-card.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { ClickNavigationDirective } from '../../../directives/click-nav-directive/click-navigation.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule,DifficultyLevelComponent,ClickNavigationDirective,NgOptimizedImage],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  individualCard=inject(IndividualCardService)
  router=inject(Router)
  items=this.individualCard.recipies
  placeholder:any={'background-image':'url(https://res.cloudinary.com/demo/image/upload/c_fill,h_20,w_20/docs/camera-640.jpg)',"background-repeat": " no-repeat;","background-size": "cover;", "filter": "blur(1.5rem);"}
  imageLoaded(){
    console.log('I laoded')
    this.placeholder={'background-image':'none'}
  }
  navigate(id:string){
   this.router.navigate(['articles',id])
  }
}
