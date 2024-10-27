import { Component, CSP_NONCE, inject } from '@angular/core';
import { LoadingItmesService } from '../../../services/account/loading-items/loading-itmes.service';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { Router } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { EmptyDataService } from '../../../services/account/empty-data-from-server/empty-data.service';
import { LoadingCardsComponent } from '../../explore/loading-cards/loading-cards.component';
import { ProfileService } from '../../../services/account/profile/profile.service';

@Component({
  selector: 'app-saved-recipe',
  standalone: true,
  imports: [CommonModule,LoadingCardsComponent,NgOptimizedImage],
  templateUrl: './saved-recipe.component.html',
  styleUrl: './saved-recipe.component.css'
})
export class SavedRecipeComponent {
  profileSerice=inject(ProfileService)
  http=inject(HttpServiceService)
  router=inject(Router)
  displayEmptyService=inject(EmptyDataService)
  loading=true
  data:{id:string,name:string,thumbnail:string}[]=[]
 constructor(){
  
  
    this.http.get('/account/saved').subscribe((res:any)=>{
    
    this.data=res
    })
    this.profileSerice.showNavBar.next(false)
 
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
 url(data:string):string{
  //Returning optimized url
  return data.split('upload')[1]

}
}
