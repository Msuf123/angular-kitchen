import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ErrorImageService {
  displayErrorService = new BehaviorSubject<boolean>(false);
  constructor() {}
  setError(state: boolean) {
    this.displayErrorService.next(state);
  }
}
