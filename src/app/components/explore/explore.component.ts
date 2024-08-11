import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { Router, RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { LoadingCardsComponent } from './loading-cards/loading-cards.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [SearchBarComponent,RecipeCardComponent,LoadingCardsComponent,SideBarComponent,RouterOutlet,TopBarComponent,ExploreComponent,BottomBarComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
