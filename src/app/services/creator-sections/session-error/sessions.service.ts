import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SessionsService {
  sessionError = new BehaviorSubject<boolean>(false);
  setError(state: boolean) {
    this.sessionError.next(state);
  }
  constructor() {}
}
