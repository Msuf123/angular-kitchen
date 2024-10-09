import { Component, inject } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { LoadingCardsComponent } from './loading-cards/loading-cards.component';
import { ObserverApiDirective } from '../../services/intersection-observer/observer-api.directive';
import { LoadingService } from '../../services/loading/loading.service';
import { CommonModule } from '@angular/common';
import { IndividualCardService } from '../../services/explore-card/individual-card.service';
import { ErrorFromServerService } from '../../services/error/error-from-server.service';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule,SearchBarComponent,RecipeCardComponent,ObserverApiDirective,LoadingCardsComponent,SideBarComponent,RouterOutlet,TopBarComponent,ExploreComponent,BottomBarComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
 
})
export class ExploreComponent {
  loading=inject(LoadingService)
  recipeCardService=inject(IndividualCardService)
  
  load=true
 constructor(){
  this.loading.state.next(true)
  this.loading.state.subscribe((state)=>{
    this.load=state
  })
  
 }
 
}
