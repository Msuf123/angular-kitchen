import { Component, inject } from '@angular/core';
import { IndividualCardService } from '../../../services/explore-card/individual-card.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DifficultyLevelComponent } from './difficulty-level/difficulty-level.component';
import { ClickNavigationDirective } from '../../../directives/click-nav-directive/click-navigation.directive';
import { Router } from '@angular/router';
import { LoadingCardsComponent } from '../loading-cards/loading-cards.component';
import { ErrorFromServerComponent } from '../../global-component/error-from-server/error-from-server.component';
import { ErrorFromServerService } from '../../../services/error/error-from-server.service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule,DifficultyLevelComponent,ClickNavigationDirective,NgOptimizedImage,LoadingCardsComponent,ErrorFromServerComponent],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  individualCard=inject(IndividualCardService)
  
  router=inject(Router)
  errorService=inject(ErrorFromServerService)
 
  errorState=false
  
  items=this.individualCard.recipies.getValue()
  
  constructor(){
    this.individualCard.recipies.next([])
    
    
    this.errorService.erroStatus.next(false)
    this.errorService.erroStatus.subscribe((currentErrorState)=>{
      this.errorState=currentErrorState
    })
    this.individualCard.recipies.subscribe((a)=>{
      
      this.items=a
    })
    
  }
  
 
  navigate(id:string){
   this.router.navigate(['articles',id])
  }
}
