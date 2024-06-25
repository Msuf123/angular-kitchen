import { Injectable } from '@angular/core';
import { RecipeCard } from './interface/recipe-card';

@Injectable({
  providedIn: 'root'
})
export class IndividualCardService {
  recipies:RecipeCard[]=[
    {name:'Pasta',id:'VEG001',img:'https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true}, {name:'Pasta',id:'VEG001',img:'v1718430391/samples/dessert-on-a-plate.jpg',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
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
