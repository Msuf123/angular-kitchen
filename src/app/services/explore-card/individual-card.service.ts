import { Injectable, inject } from '@angular/core';
import { RecipeCard } from './interface/recipe-card';
import { HttpServiceService } from '../global-http/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class IndividualCardService {
  httpService=inject(HttpServiceService)
  recipies:RecipeCard[]=[]
  makeRequest(){
   return this.httpService.get('/get-recipes?limit=10&offset=0')
  }
  addRecipes(data:RecipeCard[]){
    this.recipies=[...this.recipies,...data]
  }
  constructor() { }
}
