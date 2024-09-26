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
import { ErrorFromServerService } from '../../services/error/error-from-server.service';
import { ErrorFromServerComponent } from '../global-component/error-from-server/error-from-server.component';
import { LoadingComponent } from '../global-component/loading/loading.component';
import { AuthorSectionComponent } from "./author-section/author-section.component";

@Component({
  selector: 'app-details-about-articles',
  standalone: true,
  imports: [DescriptionComponentComponent,AuthorSectionComponent, CommonModule, MultiMediaDetailsIntroComponent, ProcedureComponentComponent, CommentSectionComponent, ErrorFromServerComponent, LoadingComponent, AuthorSectionComponent],
  templateUrl: './details-about-articles.component.html',
  styleUrl: './details-about-articles.component.css'
})
export class DetailsAboutArticlesComponent {
 service=inject(DetailsRecipeService)
 loading=inject(LoadingService)
 router=inject(ActivatedRoute)
 errorService=inject(ErrorFromServerService)
 data?:any
 ingredients?:any
 steps?:any
 errorState=false
 loadingState=false
 constructor(){
  this.loading.state.subscribe((currentState)=>{
    this.loadingState=currentState
  })
  this.errorService.erroStatus.subscribe((currentError)=>{
    this.errorState=currentError
  })
  this.loading.state.next(true)
  const id=this.router.snapshot.params['id']
  this.service.getRecipesDetails(id).subscribe((responseFromServer:any)=>{
    this.loading.state.next(false)
    if(responseFromServer!=='Unable to reach to server'&&responseFromServer!=='Something went wrong'){
    responseFromServer=JSON.parse(responseFromServer)
    console.log(responseFromServer)
    this.data=responseFromServer[0][0]
    this.ingredients=responseFromServer[0].listOfIngredients
    this.steps=responseFromServer[0].steps
    console.log(this.data,this.ingredients,responseFromServer.listOfIngredients)
  
  }
  else{
    this.errorService.erroStatus.next(true)
    this.data=null
  }  
  })
 }
}
