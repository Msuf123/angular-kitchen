import { Injectable, inject } from '@angular/core';
import { RecipeCard } from './interface/recipe-card';
import { HttpServiceService } from '../global-http/http-service.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndividualCardService {
  httpService=inject(HttpServiceService)
  recipies:BehaviorSubject<any>=new BehaviorSubject([])
  addRecipes(data:RecipeCard[]){
    console.log('Current value',this.recipies.getValue())
    this.recipies.next([...this.recipies.getValue(),...data])
  }
  constructor() { }
}
