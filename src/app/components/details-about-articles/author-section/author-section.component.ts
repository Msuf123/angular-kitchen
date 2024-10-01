import { Component, inject, ViewEncapsulation } from '@angular/core';

import { AuthorDetailsComponent } from './author-details/author-details.component';
import { LoadingAuthorComponent } from './loading-author/loading-author.component';
import { AccountComponent } from "../../components-for-logged-in-users/account/account.component";
import { CommonModule } from '@angular/common';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-section',
  standalone: true,
  imports: [ AuthorDetailsComponent, LoadingAuthorComponent, AccountComponent,CommonModule],
  templateUrl: './author-section.component.html',
  styleUrl: './author-section.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AuthorSectionComponent {
  http=inject(HttpServiceService)
  router=inject(ActivatedRoute)
  loading=false
  data=null
  values:{author:string,date_posted:string,url:string}[]=[{author:"N/a",date_posted:"2024-01-01",url:"Loginuser.png"}]
  constructor(){
    const prmas=this.router.params
    prmas.subscribe((a:any)=>{
      
      this.http.get(`/recipes/author/${a.id}`).subscribe((res)=>{
        if(Array.isArray(res)){
        this.values=res as [{author:string,date_posted:string,url:string}]
        }
      })
    })

  }
}
