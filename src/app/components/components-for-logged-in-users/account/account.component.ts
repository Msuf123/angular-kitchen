import { Component } from "@angular/core";
import { LeftOptionsBarComponent } from "./left-options-bar/left-options-bar.component";
import { RouterModule } from "@angular/router";
import { LoadingComponent } from "../../global-component/loading/loading.component";

@Component({
  selector: "app-account",
  standalone: true,
  imports: [LeftOptionsBarComponent, RouterModule, LoadingComponent],
  templateUrl: "./account.component.html",
  styleUrl: "./account.component.css",
})
export class AccountComponent {}
