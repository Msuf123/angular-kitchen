import { Component, inject } from '@angular/core';
import { LoadingCardsComponent } from '../../explore/loading-cards/loading-cards.component';
import { LoadingItmesService } from '../../../services/account/loading-items/loading-itmes.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { EmptyDataService } from '../../../services/account/empty-data-from-server/empty-data.service';

@Component({
  selector: 'app-liked-recipe',
  standalone: true,
  imports: [LoadingCardsComponent,CommonModule,LoadingCardsComponent,NgOptimizedImage],
  templateUrl: './liked-recipe.component.html',
  styleUrl: './liked-recipe.component.css'
})
export class LikedRecipeComponent {
  
  http=inject(HttpServiceService)
  router=inject(Router)
  loading=true
  data:{id:string,name:string,thumbnail:string}[]=[]
  displayEmptyService=inject(EmptyDataService)
 constructor(){
  
    this.http.get('/account/liked').subscribe((res:any)=>{
    
    this.data=res
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
 url(data:string):string{
  //Returning optimized url
  return data.split('upload')[1]

}
}
