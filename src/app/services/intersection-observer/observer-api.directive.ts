import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appObserverApi]',
  standalone: true
})
export class ObserverApiDirective {
constructor(el:ElementRef){
  function callback(entries:any,observer:any){
    entries.forEach((entry:any) => {
       if(entry.isIntersecting){
        console.log("Making a new request to the server")
       }
    })
  }
  let element=new IntersectionObserver(callback,{root:null,threshold:1,rootMargin:'0px'})
  element.observe(el.nativeElement)
}
  

}
