import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsRecipeService {

  constructor() { }
  recipiesData={name:'Pasta',ingridients:['Penne','Macaroni','Fusilli','Rigatoni','Elbow'],description:{isThere:true,data:'a dish originally from Italy consisting of dough made from durum wheat, extruded or stamped into various shapes and cooked in boiling water, and typically served with a sauce.'}
  ,procedure:[{heading:'Boild water',data:'for Set one boil the water',containsImage:true,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6esOVd3XfScLBK9waY9mfmIBe7H9kbO0RLo3Rj909Q&s'}]
}
}
