import { Component, CSP_NONCE, inject } from '@angular/core';
import { HttpServiceService } from '../../../services/global-http/http-service.service';
import { ProfileService } from '../../../services/account/profile/profile.service';
import { Router } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UploadThumbnailComponent } from '../../creator-sections/writing-recipe/parent-writing-recipe/upload-thumbnail/upload-thumbnail.component';
import { AccountComponent } from "../account/account.component";
import { FormGroup } from '@angular/forms';
import { DeleteAccountConfirmationComponent } from './delete-account-confirmation/delete-account-confirmation.component';
import { ErrorImageService } from '../../../services/error-image-upload/error-image.service';
import { ErrorImageComponent } from '../../creator-sections/error-image/error-image.component';
import { BehaviorSubject } from 'rxjs';
import { EmptyDataService } from '../../../services/account/empty-data-from-server/empty-data.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage,UploadThumbnailComponent,ErrorImageComponent, AccountComponent,DeleteAccountConfirmationComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  httpService=inject(HttpServiceService)
  profileSerice=inject(ProfileService)
  routerService=inject(Router)
  showError = inject(ErrorImageService);
  displayDeleteConfirmation=new BehaviorSubject(false)
  showConfirmation=false
  showUploadIconState=false
  showThubmnail=true
  userDetails={name:"",url:""}
  showDeleteAccountPopup=false
  loading=false
  isThereError = this.showError.displayErrorService.value;
  displayEmptyService=inject(EmptyDataService)
 constructor(){
  this.displayEmptyService.shouldShowDataMessage.next(false)
   this.profileSerice.showNavBar.next(false)
   this.httpService.get('/account/user-name').subscribe((a:any)=>{
    if(a==="Unable to reach to server"){
     this.routerService.navigate(["/"])
    }
    if(a==="Something went wrong"){
    this.profileSerice.sessionExprired.next(true)
    }
    else{
  
      console.log(a)
      this.profileSerice.userDetails.next({...a} as {name:string,url:string})
      this.loading=true
    }
   })

   

   this.profileSerice.userDetails.subscribe((a)=>{
    this.userDetails=a
   })
   this.showError.displayErrorService.subscribe((errorState) => {
    this.isThereError = errorState;
  });
  this.displayDeleteConfirmation.subscribe((state)=>{
    this.showConfirmation=state
  })
 }
 logout(){
  this.httpService.get('/account/logout').subscribe((a)=>{
    if(a==="okay"){
      this.routerService.navigate(['/'])
    }
   })
 }
 showUploadIcon(){
  console.log('entering')
  this.showUploadIconState=true
 }
 hideUplaadIcon(){
  console.log('lesivn')
  this.showUploadIconState=false
 }
 showUploadThumbnail(){
  this.profileSerice.showUploadThumbnail.next(true)
 }
 delete(){
  this.displayDeleteConfirmation.next(true)
 }
}
