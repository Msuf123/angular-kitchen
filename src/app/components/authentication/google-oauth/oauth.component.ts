import { Component, OnInit, inject } from '@angular/core';
import { HttpServiceService } from '../../../services/global-http/http-service.service';

@Component({
  selector: 'app-oauth',
  standalone: true,
  imports: [],
  templateUrl: './oauth.component.html',
  styleUrl: './oauth.component.css'
})
export class GoogleOauthComponent implements OnInit {
  request=inject(HttpServiceService)   
  ngOnInit(): void {
       let url=window.location.href
       let access_token:string=url.split('#')[1] as string
       const urlSeachPrams=new URLSearchParams(access_token)
       if(urlSeachPrams.has('access_token')){
        console.log(urlSeachPrams.get('access_token'))
        let token=urlSeachPrams.get('access_token')
         this.request.post('/google-oauth/token',{token}).subscribe((a)=>{console.log(a)})
       }
     }
}
