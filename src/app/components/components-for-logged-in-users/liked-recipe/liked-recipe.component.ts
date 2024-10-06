import { Component, inject } from '@angular/core';
import { LoadingCardsComponent } from '../../explore/loading-cards/loading-cards.component';
import { LoadingItmesService } from '../../../services/account/loading-items/loading-itmes.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingPrifleCardsComponent } from '../loading-prifle-cards/loading-prifle-cards.component';
import { HttpServiceService } from '../../../services/global-http/http-service.service';

@Component({
  selector: 'app-liked-recipe',
  standalone: true,
  imports: [LoadingCardsComponent,CommonModule,LoadingPrifleCardsComponent],
  templateUrl: './liked-recipe.component.html',
  styleUrl: './liked-recipe.component.css'
})
export class LikedRecipeComponent {
  loadingItemService=inject(LoadingItmesService)
  http=inject(HttpServiceService)
  router=inject(Router)
  loading=true
  data:{id:string,name:string,thumbnail:string}[]=[]
 constructor(){
  this.loadingItemService.state.next(true)
  this.loadingItemService.recipies.next([])
  this.loadingItemService.state.subscribe((a)=>{
    this.loading=a
  })
  this.loadingItemService.recipies.subscribe((a)=>{
    console.log(a)
    this.http.get('/account/liked').subscribe((res)=>{
    if(JSON.stringify(a)===JSON.stringify(res)){
      this.loadingItemService.state.next(false)
      console.log("They ares mae")
    }
    this.data=a
    })
    
  })
 }
 nav(id:string){
   this.router.navigate(['articles',id])
 }
 deleteLiked(id:string){
  this.http.get('/account/delete-liked/'+id).subscribe((resFromServer)=>{
    if(resFromServer==='okay'){
      this.data.forEach((element,k) => {
        if(element.id===id){
           this.data.splice(k,1)
        }
      });
    }
  })
 }
}
