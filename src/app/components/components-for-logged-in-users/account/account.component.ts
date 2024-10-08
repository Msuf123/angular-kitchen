import { Component, inject } from "@angular/core";
import { LeftOptionsBarComponent } from "./left-options-bar/left-options-bar.component";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { LoadingComponent } from "../../global-component/loading/loading.component";
import { BehaviorSubject } from "rxjs";
import { HttpServiceService } from "../../../services/global-http/http-service.service";
import { SignInMsgComponent } from "../../authentication/sign-in-msg/sign-in-msg.component";
import { CommonModule } from "@angular/common";
import { SessionExpiredComponent } from "../../creator-sections/session-expired/session-expired.component";
import { ProfileService } from "../../../services/account/profile/profile.service";
import { MobileOptionBarComponent } from "./mobile-option-bar/mobile-option-bar.component";

@Component({
  selector: "app-account",
  standalone: true,
  imports: [LeftOptionsBarComponent,MobileOptionBarComponent, RouterModule, LoadingComponent,SignInMsgComponent,CommonModule,SessionExpiredComponent],
  templateUrl: "./account.component.html",
  styleUrl: "./account.component.css",
})
export class AccountComponent {
  sessionExpired=false
  profileService=inject(ProfileService)
  loggreIn=new BehaviorSubject<boolean>(false)
  loggedInd=this.loggreIn.value
  loading=new BehaviorSubject<boolean>(false)
  httpService=inject(HttpServiceService)
  loadingStatus=this.loading.value
  router=inject(Router)
  constructor(){
    this.loading.subscribe((a)=>{
      this.loadingStatus=a
    })
    this.loggreIn.subscribe((a)=>{
      this.loggedInd=a
    })
          this.loading.next(true)
        this.httpService.get('/account/auth').subscribe((a)=>{
          this.loading.next(false)
          if(a==="error"){
            this.loggreIn.next(false)
          }
          if(a==="Unable to reach to server"){
            this.router.navigate(["/"])
          }
          if(a==="okay"){
            this.loggreIn.next(true)
          }
        })
        this.profileService.sessionExprired.subscribe((a)=>{
          this.sessionExpired=a
        })

  }

}
