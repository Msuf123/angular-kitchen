import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoadingItmesService } from '../../../services/account/loading-items/loading-itmes.service';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { Router } from '@angular/router';
import { LoadingPrifleCardsComponent } from '../loading-prifle-cards/loading-prifle-cards.component';

@Component({
  selector: 'app-published-recipe',
  standalone: true,
  imports: [CommonModule,LoadingPrifleCardsComponent],
  templateUrl: './published-recipe.component.html',
  styleUrl: './published-recipe.component.css'
})
export class PublishedRecipeComponent {
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
    this.http.get('/account/published').subscribe((res)=>{
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
 deletePublished(id:string){
  this.http.get('/published/delete/'+id).subscribe((resFromServer)=>{
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
