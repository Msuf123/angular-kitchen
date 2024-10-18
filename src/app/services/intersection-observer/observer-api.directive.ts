import { Directive, ElementRef, inject, input, Input } from '@angular/core';
import { HttpServiceService } from '../global-http/http-service.service';
import { IndividualCardService } from '../explore-card/individual-card.service';
import { ErrorFromServerService } from '../error/error-from-server.service';
import { RecipeCard } from '../explore-card/interface/recipe-card';
import { LoadingService } from '../loading/loading.service';

@Directive({
  selector: '[appObserverApi]',
  standalone: true
})
export class ObserverApiDirective {
 private errorService=inject(ErrorFromServerService)
 
 @Input() loading!:any
  @Input() individualCard!:any
 @Input() url!:string
 
constructor(el:ElementRef,http:HttpServiceService){
  let offset=0
  const callback=(entries:any,observer:any)=>{
    
    entries.forEach((entry:any) => {
       if(entry.isIntersecting){
        
        http.get(`${this.url}?offset=${offset}`).subscribe((responseFromServer)=>{
          
          if(responseFromServer!=="Something went wrong"&&responseFromServer!=="Unable to reach to server"&&Array.isArray(responseFromServer)){
            
            if(responseFromServer.length===0){
             
              this.loading.state.next(false)
            }
            else{
              responseFromServer.forEach((element:any) => {
                let urls=element['thumbnail'].split(['upload'])
                console.log(urls[1])
                element.thumbnail=urls[1]
              });
              console.log(responseFromServer)
            this.individualCard.addRecipes(responseFromServer as any)
            }
         }
         else{
           this.errorService.erroStatus.next(true)
           this.loading.state.next(false)
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
