import { Component, Input, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormsInvalidService } from "../../../../../services/creator-sections/error-in-forms/forms-invalid.service";
import { HttpServiceService } from "../../../../../services/global-http/http-service.service";

@Component({
  selector: "app-writing-top-bar",
  standalone: true,
  imports: [],
  templateUrl: "./writing-top-bar.component.html",
  styleUrl: "./writing-top-bar.component.css",
})
export class WritingTopBarComponent {
  @Input() form!: FormGroup;
  http = inject(HttpServiceService);
  formsInvalid = inject(FormsInvalidService);
  uploadDraft() {
    let name = this.form.get("name")?.getRawValue();
    let price = this.form.get("priceOfMeal")?.getRawValue();
    let time = this.form.get("time")?.getRawValue();
    if (name === "") {
      this.formsInvalid.setHasError("The name of recipe can't be empty");
      this.formsInvalid.setIsThereError(true);
    } else {
      if (Number.isNaN(Number(price))) {
        this.formsInvalid.setHasError("Price of recipe should be in numbers");
        this.formsInvalid.setIsThereError(true);
      }
      if (Number.isNaN(Number(time))) {
        this.formsInvalid.setHasError("Time of recipe should be in numbers");
        this.formsInvalid.setIsThereError(true);
      }
    }
    this.http.post("/write/draft", this.form.value).subscribe((a) => {
      console.log(a);
    });
  }
  pulishData() {
    let name = this.form.get("name")?.getRawValue();
    let price = this.form.get("priceOfMeal")?.getRawValue();
    let time = this.form.get("time")?.getRawValue();
  }
}
