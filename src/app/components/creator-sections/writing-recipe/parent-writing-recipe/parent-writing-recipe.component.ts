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
import { HttpClientModule } from '@angular/common/http';
import { SignInMsgComponent } from '../../../authentication/sign-in-msg/sign-in-msg.component';

@Component({
  selector: 'app-parent-writing-recipe',
  standalone: true,
  imports: [WritingTopBarComponent,CommonModule,WritingFirstSectionComponent,WritingSecondSectionComponent,WritingThirdSectionComponent,ReactiveFormsModule,SignInMsgComponent],
  templateUrl: './parent-writing-recipe.component.html',
  styleUrl: './parent-writing-recipe.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ParentWritingRecipeComponent {
  form:FormGroup
  listOfQuestioins
  loadingService=inject(LoadingService)
  
   
   constructor(private questions:HttpServiceService,private formService:FormGeneratorServiceService){
    console.log(this.loadingService.state.value)
  
     this.listOfQuestioins=this.questions.question()
     this.form=formService.getFormObject(this.listOfQuestioins)
    
   }
   submitForm(e:any){
    let eventEmitter=e.submitter
    if(eventEmitter.value==='Publish'){
      console.log(this.form.value)
    }
    
    
   }
   
}
