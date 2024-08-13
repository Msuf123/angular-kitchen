import { Directive, ElementRef, inject } from '@angular/core';
import { HttpServiceService } from '../global-http/http-service.service';
import { IndividualCardService } from '../explore-card/individual-card.service';
import { ErrorFromServerService } from '../error/error-from-server.service';
import { RecipeCard } from '../explore-card/interface/recipe-card';

@Directive({
  selector: '[appObserverApi]',
  standalone: true
})
export class ObserverApiDirective {
  errorService=inject(ErrorFromServerService)
  individualCard=inject(IndividualCardService)
constructor(el:ElementRef,http:HttpServiceService){
  let offset=0
  function callback(entries:any,observer:any){
    entries.forEach((entry:any) => {
       if(entry.isIntersecting){
        
        http.get(`/get-recipes?offset=${offset}`).subscribe((responseFromServer)=>{
          if(responseFromServer!=="Something went wrong"&&responseFromServer!=="Unable to reach to server"){
            this.individualCard.addRecipes(responseFromServer as RecipeCard[])
            this.items=this.individualCard.recipies
         }else{
           this.errorService.erroStatus.next(true)
         }
        })
        offset+=10
       }
    })
  }
  let element=new IntersectionObserver(callback,{root:null,threshold:1,rootMargin:'0px'})
  element.observe(el.nativeElement)
}
  

}
