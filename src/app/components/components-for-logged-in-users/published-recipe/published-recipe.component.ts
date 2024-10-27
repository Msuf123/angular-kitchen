import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoadingItmesService } from '../../../services/account/loading-items/loading-itmes.service';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { Router } from '@angular/router';
import { EmptyDataService } from '../../../services/account/empty-data-from-server/empty-data.service';
import { LoadingCardsComponent } from '../../explore/loading-cards/loading-cards.component';
import { ProfileService } from '../../../services/account/profile/profile.service';

@Component({
  selector: 'app-published-recipe',
  standalone: true,
  imports: [CommonModule,LoadingCardsComponent,NgOptimizedImage],
  templateUrl: './published-recipe.component.html',
  styleUrl: './published-recipe.component.css'
})
export class PublishedRecipeComponent {
  profileSerice=inject(ProfileService)
  http=inject(HttpServiceService)
  router=inject(Router)
  loading=true
  data:{id:string,name:string,thumbnail:string}[]=[]
  displayEmptyService=inject(EmptyDataService)
 constructor(){
  this.profileSerice.showNavBar.next(false)
    this.http.get('/account/published').subscribe((res:any)=>{
    
    this.data=res
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
 url(data:string):string{
  //Returning optimized url
  return data.split('upload')[1]

}
}
