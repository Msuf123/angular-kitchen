import { Injectable, inject } from '@angular/core';
import { RecipeDataFromServer } from './interface-of-details-data/recipe-data-from-server';
import { HttpServiceService } from '../global-http/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsRecipeService {
  http=inject(HttpServiceService)
  constructor() { }
  getRecipesDetails(){
    return this.http.get('/recipes/details')
  }
}
