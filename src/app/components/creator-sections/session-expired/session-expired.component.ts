import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { SessionsService } from "../../../services/creator-sections/session-error/sessions.service";

@Component({
  selector: "app-session-expired",
  standalone: true,
  imports: [],
  templateUrl: "./session-expired.component.html",
  styleUrl: "./session-expired.component.css",
})
export class SessionExpiredComponent {
  router = inject(Router);
  session = inject(SessionsService);
  nav() {
    this.session.setError(false);
    this.router.navigate(["/"]);
  }
}
