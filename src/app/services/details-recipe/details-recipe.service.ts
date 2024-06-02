import { Injectable } from '@angular/core';
import { RecipeDataFromServer } from './interface-of-details-data/recipe-data-from-server';

@Injectable({
  providedIn: 'root'
})
export class DetailsRecipeService {

  constructor() { }
  recipiesData:RecipeDataFromServer={name:'Pasta',video:{isThere:true,poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6esOVd3XfScLBK9waY9mfmIBe7H9kbO0RLo3Rj909Q&s',url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},ingridients:['Penne','Macaroni','Fusilli','Rigatoni','Elbow'],description:{isThere:true,data:'a dish orisThereiginally from Italy consisting of dough made from durum wheat, extruded or stamped into various shapes and cooked in boiling water, and typically served with a sauce.'}
  ,procedure:[{heading:'Boild water',data:'for Set one boil the water',containsImage:true,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6esOVd3XfScLBK9waY9mfmIBe7H9kbO0RLo3Rj909Q&s'}],
  aboutCreator:{creatorImageUrl:'https',creatorName:'Msuf123',numberOfFollowers:10}
}
}
