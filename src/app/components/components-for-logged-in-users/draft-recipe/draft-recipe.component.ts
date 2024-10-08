import { Component, inject } from '@angular/core';
import { LoadingItmesService } from '../../../services/account/loading-items/loading-itmes.service';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingPrifleCardsComponent } from '../loading-prifle-cards/loading-prifle-cards.component';

@Component({
  selector: 'app-draft-recipe',
  standalone: true,
  imports: [CommonModule,LoadingPrifleCardsComponent],
  templateUrl: './draft-recipe.component.html',
  styleUrl: './draft-recipe.component.css'
})
export class DraftRecipeComponent {
  loadingItemService=inject(LoadingItmesService)
  http=inject(HttpServiceService)
  router=inject(Router)
  loading=true
  data:{id:string,name:string,image_url:string}[]=[]
 constructor(){
  this.loadingItemService.state.next(true)
  this.loadingItemService.recipies.next([])
  this.loadingItemService.state.subscribe((a)=>{
    this.loading=a
  })
  this.loadingItemService.recipies.subscribe((a)=>{
    console.log(a)
    this.http.get('/account/draft/').subscribe((res)=>{
    if(JSON.stringify(a)===JSON.stringify(res)){
      this.loadingItemService.state.next(false)
      console.log("They ares same")
    }
  
    this.data=a
    })
    
  })
 }

 deleteDraft(id:string){
  this.http.get('/account/draft/delete-draft/'+id).subscribe((resFromServer)=>{
    if(resFromServer==='okay'){
      this.data.forEach((element,k) => {
        if(element.id===id){
           this.data.splice(k,1)
        }
      });
    }
  })
 }
 editDraft(id:string){
  this.router.navigateByUrl('/account/edit/'+id)
 }
}
