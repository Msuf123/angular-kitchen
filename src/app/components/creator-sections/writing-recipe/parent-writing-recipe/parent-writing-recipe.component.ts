import { Component, ViewEncapsulation, inject } from '@angular/core';
import { WritingTopBarComponent } from './writing-top-bar/writing-top-bar.component';
import { WritingFirstSectionComponent } from './writing-first-section/writing-first-section.component';
import { WritingSecondSectionComponent } from './writing-second-section/writing-second-section.component';
import { WritingThirdSectionComponent } from './writing-third-section/writing-third-section.component';
import { IndividualInputFormComponent } from '../individual-input-form/individual-input-form.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpServiceService } from '../../../../services/global-http/http-service.service';
import { FormGeneratorServiceService } from '../../../../services/creator-sections/writing-recipe/form-generator-service.service';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../../services/loading/loading.service';
import { SignInMsgComponent } from '../../../authentication/sign-in-msg/sign-in-msg.component';
import { SaveChangesService } from '../../../../services/creator-sections/should-save-changes/save-changes.service';
import { DisplaySaveDraftComponent } from '../../display-save-draft/display-save-draft.component';
import { DisplayMessageService } from '../../../../services/creator-sections/display-save-draft/display-message.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-parent-writing-recipe',
  standalone: true,
  imports: [WritingTopBarComponent,DisplaySaveDraftComponent,CommonModule,WritingFirstSectionComponent,WritingSecondSectionComponent,WritingThirdSectionComponent,ReactiveFormsModule,SignInMsgComponent],
  templateUrl: './parent-writing-recipe.component.html',
  styleUrl: './parent-writing-recipe.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ParentWritingRecipeComponent {
  form:FormGroup
  listOfQuestioins
  loadingService=inject(LoadingService)
  canDeactivateS=inject(SaveChangesService)
  showDisplay=inject(DisplayMessageService)
  showMsg=false
   constructor(private questions:HttpServiceService,private formService:FormGeneratorServiceService){
    let counter=0
    this.listOfQuestioins=this.questions.question()
     this.form=formService.getFormObject(this.listOfQuestioins)
     this.form.valueChanges.subscribe((a)=>{
      console.log(a)
      if(counter===0){
          this.canDeactivateS.saveCahnges.next(true)
          console.log("Made changes")
          counter++
      }
      
     })
    this.showDisplay.shouldDisplay.subscribe((state)=>{
      this.showMsg=state
    })
   }
   submitForm(e:any){
    let eventEmitter=e.submitter
    if(eventEmitter.value==='Publish'){
      console.log(this.form.value)
    }
    
    
   }
   canDeactivate() {
  
      const deactivateSubject = new Subject<boolean>();
      let a=window.confirm("Seave changes without exiting")
      console.log(a)
      return a;
      
    
  }
   
}
