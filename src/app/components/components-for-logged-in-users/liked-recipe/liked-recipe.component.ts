import { Component, inject } from '@angular/core';
import { LoadingCardsComponent } from '../../explore/loading-cards/loading-cards.component';
import { LoadingItmesService } from '../../../services/account/loading-items/loading-itmes.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingPrifleCardsComponent } from '../loading-prifle-cards/loading-prifle-cards.component';

@Component({
  selector: 'app-liked-recipe',
  standalone: true,
  imports: [LoadingCardsComponent,CommonModule,LoadingPrifleCardsComponent],
  templateUrl: './liked-recipe.component.html',
  styleUrl: './liked-recipe.component.css'
})
export class LikedRecipeComponent {
  loadingItemService=inject(LoadingItmesService)
  router=inject(Router)
  data:{id:string,name:string,thumbnail:string}[]=[]
 constructor(){
  this.loadingItemService.recipies.subscribe((a)=>{
    console.log(a)
    this.data=a
  })
 }
 nav(id:string){
   this.router.navigate(['articles',id])
 }
}
