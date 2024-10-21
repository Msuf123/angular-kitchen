import { Component, inject } from '@angular/core';
import { LoadingItmesService } from '../../../services/account/loading-items/loading-itmes.service';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EmptyDataService } from '../../../services/account/empty-data-from-server/empty-data.service';
import { LoadingCardsComponent } from '../../explore/loading-cards/loading-cards.component';

@Component({
  selector: 'app-draft-recipe',
  standalone: true,
  imports: [CommonModule,LoadingCardsComponent],
  templateUrl: './draft-recipe.component.html',
  styleUrl: './draft-recipe.component.css'
})
export class DraftRecipeComponent {
  
  http=inject(HttpServiceService)
  router=inject(Router)
  loading=true
  displayEmptyService=inject(EmptyDataService)
  data:{id:string,name:string,image_url:string}[]=[]
 constructor(){
 
    this.http.get('/account/draft/').subscribe((res:any)=>{
      
    
  
    this.data=res
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
