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
  laodingState=false
  errorState=false
  
  items=this.individualCard.recipies
  
  constructor(){
    this.loadingService.state.next(false)
    this.errorService.erroStatus.next(false)
    this.errorService.erroStatus.subscribe((currentErrorState)=>{
      this.errorState=currentErrorState
    })
    this.loadingService.state.subscribe((currentLoadingState)=>{
      this.laodingState=currentLoadingState
    })
    this.loadingService.state.next(true)
    this.individualCard.makeRequest().subscribe((responseFromServer)=>{
      this.loadingService.state.next(false)
      console.log(responseFromServer)
      if(responseFromServer!=="Something went wrong"&&responseFromServer!=="Unable to reach to server"){
         this.individualCard.addRecipes(responseFromServer as RecipeCard[])
         this.items=this.individualCard.recipies
      }else{
        this.errorService.erroStatus.next(true)
      }
    })
  }
  
 
  navigate(id:string){
   this.router.navigate(['articles',id])
  }
}
