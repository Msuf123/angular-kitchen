import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [SearchBarComponent,RecipeCardComponent,SideBarComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
