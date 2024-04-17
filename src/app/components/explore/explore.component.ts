import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [SearchBarComponent,RecipeCardComponent,SideBarComponent,RouterOutlet],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
