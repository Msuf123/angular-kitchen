import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ErrorImageService {
  displayErrorService = new BehaviorSubject<boolean>(false);
  constructor() {}
  setError(state: boolean) {
    setTimeout(() => {
      this.displayErrorService.next(false);
    }, 3000);
    this.displayErrorService.next(state);
  }
}
