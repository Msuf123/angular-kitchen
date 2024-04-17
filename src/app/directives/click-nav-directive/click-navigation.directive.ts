import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appClickNavigation]',
  standalone: true
})
export class ClickNavigationDirective {

  constructor(private router:Router) { }
  @Input() url!:string
  @HostListener('click') elementIsClicked(){
    this.router.navigate(['articles'],{queryParams:{id:this.url}})
  }
}
