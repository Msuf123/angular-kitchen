import { Component, inject } from '@angular/core';
import { IndividualCardService } from '../../../services/explore-card/individual-card.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { ClickNavigationDirective } from '../../../directives/click-nav-directive/click-navigation.directive';
import { Router } from '@angular/router';
import { LoadingCardsComponent } from '../loading-cards/loading-cards.component';
import { LoadingService } from '../../../services/loading/loading.service';
import { ErrorFromServerComponent } from '../../global-component/error-from-server/error-from-server.component';
import { ErrorFromServerService } from '../../../services/error/error-from-server.service';
import { RecipeCard } from '../../../services/explore-card/interface/recipe-card';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule,DifficultyLevelComponent,ClickNavigationDirective,NgOptimizedImage,LoadingCardsComponent,ErrorFromServerComponent],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  individualCard=inject(IndividualCardService)
  loadingService=inject(LoadingService)
  router=inject(Router)
  errorService=inject(ErrorFromServerService)
 
  errorState=false
  
  items=this.individualCard.recipies.getValue()
  
  constructor(){
    this.loadingService.state.next(false)
    this.errorService.erroStatus.next(false)
    this.errorService.erroStatus.subscribe((currentErrorState)=>{
      this.errorState=currentErrorState
    })
    this.individualCard.recipies.subscribe((a)=>{
      this.items=a
    })
    this.loadingService.state.next(true)
  }
  
 
  navigate(id:string){
   this.router.navigate(['articles',id])
  }
}
