import { Injectable } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import BaseQuestion from "../../../custom-class/questions-class/creator-write-sec/base.question";

@Injectable({
  providedIn: "root",
})
export class FormGeneratorServiceService {
  constructor() {}
  isNumber(): ValidatorFn {
    return (constrol: AbstractControl): ValidationErrors | null => {
      if (Number.isNaN(constrol.value)) {
        return { number: "yes" };
      } else {
        return null;
      }
    };
  }
  getFormObject(arrayOfQuestions: BaseQuestion[]) {
    let object: any = {
      description: new FormControl(""),
      ingridents: new FormArray([
        new FormControl("", { validators: [Validators.required] }),
      ]),
      steps: new FormArray([
        new FormGroup({
          heading: new FormControl("", { validators: [Validators.required] }),
          about: new FormControl("", { validators: [Validators.required] }),
          imageUrl: new FormControl(""),
        }),
      ]),
    };
    arrayOfQuestions.forEach((element) => {
      object[element.key] = element.required
        ? new FormControl("", { validators: [Validators.required] })
        : new FormControl(element.defaultValue);
    });
    return new FormGroup(object);
  }
}
