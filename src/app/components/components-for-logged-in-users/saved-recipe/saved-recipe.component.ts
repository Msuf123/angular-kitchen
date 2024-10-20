import { Component, CSP_NONCE, inject } from '@angular/core';
import { LoadingItmesService } from '../../../services/account/loading-items/loading-itmes.service';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingPrifleCardsComponent } from '../loading-prifle-cards/loading-prifle-cards.component';
import { EmptyDataService } from '../../../services/account/empty-data-from-server/empty-data.service';

@Component({
  selector: 'app-saved-recipe',
  standalone: true,
  imports: [CommonModule,LoadingPrifleCardsComponent],
  templateUrl: './saved-recipe.component.html',
  styleUrl: './saved-recipe.component.css'
})
export class SavedRecipeComponent {
  loadingItemService=inject(LoadingItmesService)
  http=inject(HttpServiceService)
  router=inject(Router)
  displayEmptyService=inject(EmptyDataService)
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
    this.http.get('/account/saved').subscribe((res:any)=>{
    if(JSON.stringify(a)===JSON.stringify(res)){
      this.loadingItemService.state.next(false)
      if(a.length===0||0===res.length){
          console.log("no data")
          this.displayEmptyService.shouldShowDataMessage.next(true)
      }
      else{
        this.displayEmptyService.shouldShowDataMessage.next(false)
      }
    }
    this.data=a
    })
    
  })
 }
 nav(id:string){
   this.router.navigate(['articles',id])
 }
 deleteSaved(id:string){
  this.http.get('/account/delete-saved/'+id).subscribe((resFromServer)=>{
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
