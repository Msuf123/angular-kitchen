import { Injectable } from '@angular/core';
import { RecipeCard } from './interface/recipe-card';

@Injectable({
  providedIn: 'root'
})
export class IndividualCardService {
  recipies:RecipeCard[]=[{name:'Pasta',id:'VEG001',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM17-zxYOLkKbUhIoZS99NDjLlfS5fnXtVoiVCW3cBQ&s',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true}]
  constructor() { }
}
