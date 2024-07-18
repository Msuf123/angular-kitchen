import { Component, inject } from '@angular/core';
import { DescriptionComponentComponent } from './description-component/description-component.component';
import { MultiMediaDetailsIntroComponent } from './multi-media-details-intro/multi-media-details-intro.component';
import { ProcedureComponentComponent } from './procedure-component/procedure-component.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { DetailsRecipeService } from '../../services/details-recipe/details-recipe.service';
import { RecipeDataFromServer } from '../../services/details-recipe/interface-of-details-data/recipe-data-from-server';
import { CommonModule, JsonPipe } from '@angular/common';
import { LoadingService } from '../../services/loading/loading.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-details-about-articles',
  standalone: true,
  imports: [DescriptionComponentComponent,CommonModule,MultiMediaDetailsIntroComponent,ProcedureComponentComponent,CommentSectionComponent],
  templateUrl: './details-about-articles.component.html',
  styleUrl: './details-about-articles.component.css'
})
export class DetailsAboutArticlesComponent {
 service=inject(DetailsRecipeService)
 loading=inject(LoadingService)
 router=inject(ActivatedRoute)
 data?:any
 ingredients?:any
 steps?:any
 constructor(){
  this.loading.state.next(true)
  const id=this.router.snapshot.params['id']
  this.service.getRecipesDetails(id).pipe(map((data)=>JSON.parse(data))).subscribe((responseFromServer)=>{
    this.loading.state.next(false)
    if(responseFromServer!=='Unable to reach to server'&&responseFromServer!=='Something went wrong'){
    console.log(responseFromServer)
    this.data=responseFromServer[0][0]
    this.ingredients=responseFromServer[0].listOfIngredients
    this.steps=responseFromServer[0].steps
    console.log(this.data,this.ingredients,responseFromServer.listOfIngredients)
  
  }
  else{
    this.data=null
  }  
  })
 }
}
