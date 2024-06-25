import { Injectable } from '@angular/core';
import { RecipeCard } from './interface/recipe-card';

@Injectable({
  providedIn: 'root'
})
export class IndividualCardService {
  recipies:RecipeCard[]=[
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true}, {name:'Pasta',id:'VEG001',img:'v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Pasta',id:'VEG001',img:'/v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true}, {name:'Pasta',id:'VEG001',img:'v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},

    

  ]
  constructor() { }
}
