import { Injectable } from '@angular/core';
import { RecipeCard } from './interface/recipe-card';

@Injectable({
  providedIn: 'root'
})
export class IndividualCardService {
  recipies:RecipeCard[]=[
    {name:'Pasta',id:'VEG001',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM17-zxYOLkKbUhIoZS99NDjLlfS5fnXtVoiVCW3cBQ&s',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Oat Mean Butter Bar',id:'VEG002',img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/22/0/0127195_Oatmeal-Peanut-Butter-Bars_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371591055858.jpeg',difficultyLevel:3,healthyLevel:3,ruppes:200,veg:true}
    , {name:'Pasta',id:'VEG001',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM17-zxYOLkKbUhIoZS99NDjLlfS5fnXtVoiVCW3cBQ&s',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
    {name:'Oat Mean Butter Bar',id:'VEG002',img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/22/0/0127195_Oatmeal-Peanut-Butter-Bars_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371591055858.jpeg',difficultyLevel:3,healthyLevel:3,ruppes:200,veg:true}
  ,{name:'Pasta',id:'VEG001',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM17-zxYOLkKbUhIoZS99NDjLlfS5fnXtVoiVCW3cBQ&s',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
  {name:'Oat Mean Butter Bar',id:'VEG002',img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/22/0/0127195_Oatmeal-Peanut-Butter-Bars_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371591055858.jpeg',difficultyLevel:3,healthyLevel:3,ruppes:200,veg:true}
  , {name:'Pasta',id:'VEG001',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM17-zxYOLkKbUhIoZS99NDjLlfS5fnXtVoiVCW3cBQ&s',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
  {name:'Oat Mean Butter Bar',id:'VEG002',img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/22/0/0127195_Oatmeal-Peanut-Butter-Bars_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371591055858.jpeg',difficultyLevel:3,healthyLevel:3,ruppes:200,veg:true}
,{name:'Pasta',id:'VEG001',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM17-zxYOLkKbUhIoZS99NDjLlfS5fnXtVoiVCW3cBQ&s',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
{name:'Oat Mean Butter Bar',id:'VEG002',img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/22/0/0127195_Oatmeal-Peanut-Butter-Bars_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371591055858.jpeg',difficultyLevel:3,healthyLevel:3,ruppes:200,veg:true}
, {name:'Pasta',id:'VEG001',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM17-zxYOLkKbUhIoZS99NDjLlfS5fnXtVoiVCW3cBQ&s',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
{name:'Oat Mean Butter Bar',id:'VEG002',img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/22/0/0127195_Oatmeal-Peanut-Butter-Bars_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371591055858.jpeg',difficultyLevel:3,healthyLevel:3,ruppes:200,veg:true}
,{name:'Pasta',id:'VEG001',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM17-zxYOLkKbUhIoZS99NDjLlfS5fnXtVoiVCW3cBQ&s',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
{name:'Oat Mean Butter Bar',id:'VEG002',img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/22/0/0127195_Oatmeal-Peanut-Butter-Bars_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371591055858.jpeg',difficultyLevel:3,healthyLevel:3,ruppes:200,veg:true}
, {name:'Pasta',id:'VEG001',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlM17-zxYOLkKbUhIoZS99NDjLlfS5fnXtVoiVCW3cBQ&s',difficultyLevel:3,healthyLevel:2,ruppes:300,veg:true},
{name:'Oat Mean Butter Bar',id:'VEG002',img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/22/0/0127195_Oatmeal-Peanut-Butter-Bars_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371591055858.jpeg',difficultyLevel:3,healthyLevel:3,ruppes:200,veg:true}
,

  ]
  constructor() { }
}
