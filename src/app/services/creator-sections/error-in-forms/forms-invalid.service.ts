import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FormsInvalidService {
  errorsWhileUploading = new BehaviorSubject<boolean>(false);
  hasError = new BehaviorSubject<string>("");
  setIsThereError(value: boolean,fun?:any) {
    this.errorsWhileUploading.next(value);
    setTimeout(() => {
      this.setHasError("");
      this.errorsWhileUploading.next(false);
      if(fun!==undefined){
      fun.next(true)}
    }, 3000);
  }
  setHasError(value: string) {
    this.hasError.next(value);
  }
  constructor() {}
}
