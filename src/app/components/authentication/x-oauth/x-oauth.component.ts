import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpServiceService } from "../../../services/global-http/http-service.service";
import {
  adjectives,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";

@Component({
  selector: "app-x-oauth",
  standalone: true,
  imports: [],
  templateUrl: "./x-oauth.component.html",
  styleUrl: "./x-oauth.component.css",
})
export class XOauthComponent implements OnInit {
  router = inject(ActivatedRoute);
  http = inject(HttpServiceService);
  nav=inject(Router)
  twitterLogin = new URL("https://twitter.com/i/oauth2/authorize");
  twitterSearchPrams = new URLSearchParams({
    response_type: "code",
    client_id: "ZENKdnpmSjVSNlJHbDZvRDVMMm86MTpjaQ",
    redirect_uri: "https://ec2-3-27-191-229.ap-southeast-2.compute.amazonaws.com/oauth/x",
    state: "2",
    code_challenge: "jkdaf",
    code_challenge_method: "plain",
    scope: "users.read+tweet.read",
  });
  ngOnInit(): void {
    const accessToken = new URL(window.location.href);
    const searchPrmas = new URLSearchParams(accessToken.searchParams);
   if(searchPrmas.has('error')){
      this.nav.navigate(['login'])
      console.log('hello')
   }
   else{
            if (!searchPrmas.has("code")) {
              const code = uniqueNamesGenerator({ dictionaries: [adjectives, colors] });
              console.log("Mkaing request with code", code);
              this.http.post("/x-oauth/codeChallange", { code }).subscribe((a) => {
                console.log("Making request")
                console.log(a)
                // if (a === "okay") {
                //   this.twitterSearchPrams.set("code_challenge", code);
                  
                //   // window.location.href =
                //   //   this.twitterLogin.toString() +
                //   //   "?" +
                //   //   this.twitterSearchPrams.toString();
                // }
                // else{
                //   this.nav.navigate(['login'])
                  
                // }
              });
            } else {
              if (searchPrmas.has("code")) {
                const code = searchPrmas.get("code");
                this.http.post("/x-oauth/code", { code }).subscribe((a) => {
                 if(a==="okay"){
                  //this.nav.navigate([''])
                 }
                });
              } else {
                this.nav.navigate(['login'])
              }
            }
  }
  }
  push(){
    this.http.get('/x-oauth/code').subscribe((a)=>{
      console.log(a)
    })
  }
  constructor() {}
}
