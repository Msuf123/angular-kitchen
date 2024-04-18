import { Component, inject } from '@angular/core';
import { DescriptionComponentComponent } from './description-component/description-component.component';
import { MultiMediaDetailsIntroComponent } from './multi-media-details-intro/multi-media-details-intro.component';
import { ProcedureComponentComponent } from './procedure-component/procedure-component.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { DetailsRecipeService } from '../../services/details-recipe/details-recipe.service';
import { RecipeDataFromServer } from '../../services/details-recipe/interface-of-details-data/recipe-data-from-server';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-about-articles',
  standalone: true,
  imports: [DescriptionComponentComponent,CommonModule,MultiMediaDetailsIntroComponent,ProcedureComponentComponent,CommentSectionComponent],
  templateUrl: './details-about-articles.component.html',
  styleUrl: './details-about-articles.component.css'
})
export class DetailsAboutArticlesComponent {
 service=inject(DetailsRecipeService)
 data:RecipeDataFromServer
 constructor(){
  this.data=this.service.recipiesData
 }
}
