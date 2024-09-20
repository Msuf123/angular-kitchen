import { Component, inject } from "@angular/core";
import { FormsInvalidService } from "../../../services/creator-sections/error-in-forms/forms-invalid.service";

@Component({
  selector: "app-missing-parameter",
  standalone: true,
  imports: [],
  templateUrl: "./missing-parameter.component.html",
  styleUrl: "./missing-parameter.component.css",
})
export class MissingParameterComponent {
  formInvalid = inject(FormsInvalidService);
  msg = "";
  constructor() {
    this.formInvalid.hasError.subscribe((text) => {
      this.msg = text;
    });
  }
}
