import { Component, Input, OnInit, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormsInvalidService } from "../../../../../services/creator-sections/error-in-forms/forms-invalid.service";
import { HttpServiceService } from "../../../../../services/global-http/http-service.service";
import { FormGeneratorServiceService } from "../../../../../services/creator-sections/writing-recipe/form-generator-service.service";
import { Router } from "@angular/router";
import { UploadThumbnailComponent } from "../upload-thumbnail/upload-thumbnail.component";
import { UploadThumbnailService } from "../../../../../services/creator-sections/display-uplaod-thumbnail/upload-thumbnail.service";

@Component({
  selector: "app-writing-top-bar",
  standalone: true,
  imports: [UploadThumbnailComponent],
  templateUrl: "./writing-top-bar.component.html",
  styleUrl: "./writing-top-bar.component.css",
})
export class WritingTopBarComponent {
  @Input() form!: FormGroup;
  @Input() id!:string
  http = inject(HttpServiceService);
  formsInvalid = inject(FormsInvalidService);
  formGenratorService=inject(FormGeneratorServiceService)
  router=inject(Router)
  thumbnailService=inject(UploadThumbnailService)
  textInUpdate="Save as Draft"
  showThumbnail=false
  constructor(){
    this.formGenratorService.editMode.subscribe((a)=>{
      if(a){
        this.textInUpdate="Update Draft"
      }
    })
    this.thumbnailService.shouldDisplayThumbnail.subscribe((currentState)=>{
      this.showThumbnail=currentState
    })
  }
  uploadDraft() {
    let name = this.form.get("name")?.getRawValue();
    let price = this.form.get("priceOfMeal")?.getRawValue();
    let time = this.form.get("time")?.getRawValue();
    if (name === "") {
      this.formsInvalid.setHasError("The name of recipe can't be empty");
      this.formsInvalid.setIsThereError(true);
    } else {
      if(price==="" && time===""){
        this.form.patchValue({priceOfMeal:0,time:0})
        
      }
      if (!Number.isNaN(Number(price))) {
        if (!Number.isNaN(Number(time))) {
          if(this.textInUpdate==="Save as Draft"){
          this.http.post("/write/draft", this.form.value).subscribe((resposeFromServe) => {
            if(resposeFromServe==='okay'){
              this.router.navigate(['account','draft'])
            }
          });}
          else{
           
            this.http.post("/write/draft/update-post",{...this.form.value,id:this.id}).subscribe((a)=>{
              console.log(a)
            })
          }
        }
        else{
          this.formsInvalid.setHasError("Time of recipe should be in numbers");
          this.formsInvalid.setIsThereError(true);
        }
}
else{
  
  this.formsInvalid.setHasError("Price of recipe should be in numbers");
  this.formsInvalid.setIsThereError(true);
}
}
      
      
  
   
  }

  pulishData() {
    let name = this.form.get("name")?.getRawValue();
    let price = this.form.get("priceOfMeal")?.getRawValue();
    let time = this.form.get("time")?.getRawValue();
    let description=this.form.get("description")?.getRawValue();
    let ingredient=this.form.get("ingridents")?.getRawValue()
    let stpes=this.form.get("steps")?.getRawValue()
    if (name === "") {
      this.formsInvalid.setHasError("The name of recipe can't be empty");
      this.formsInvalid.setIsThereError(true);
    } else {
      if(price==="" && time===""){
        this.form.patchValue({priceOfMeal:0,time:0})
        
      }
      if (!Number.isNaN(Number(price))) {
        if (!Number.isNaN(Number(time))) {
          if(description!==""){
            if(ingredient.lenght!==0){
               if(ingredient[0]!==""){
                if(stpes.lenght!==0){
                  let error=false
                   stpes.forEach((element:{heading:string,about:string,imageUrl:string}) => {
                     if(element.heading===""||element.about===""){
                      error=true
                     }
                   });
                   if(error){
                    this.formsInvalid.setHasError("The steps value should not be empty")
                    this.formsInvalid.setIsThereError(true);
                   }
                   else{
                     this.thumbnailService.shouldDisplayThumbnail.next(true)
                    
                   }
                }
                else{
                  this.formsInvalid.setHasError("It should have at least one step")
                this.formsInvalid.setIsThereError(true);
                }
               }
               else{
                this.formsInvalid.setHasError("The first Value of ingredients should not be empty")
                this.formsInvalid.setIsThereError(true);
               }
            }
            else{
              this.formsInvalid.setHasError("It should atleast have one ingredients")
              this.formsInvalid.setIsThereError(true);
            }
          }
          else{
            this.formsInvalid.setHasError("The description should not be empty")
            this.formsInvalid.setIsThereError(true);
          }
        }
        else{
          this.formsInvalid.setHasError("Time of recipe should be in numbers");
          this.formsInvalid.setIsThereError(true);
        }
}
else{
  
  this.formsInvalid.setHasError("Price of recipe should be in numbers");
  this.formsInvalid.setIsThereError(true);
}
  }
}
}

