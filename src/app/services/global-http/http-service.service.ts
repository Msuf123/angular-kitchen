import { Injectable, Injector, inject } from "@angular/core";
import BaseQuestion from "../../custom-class/questions-class/creator-write-sec/base.question";
import TextBox from "../../custom-class/questions-class/creator-write-sec/ChildClasses/text.box";
import Slider from "../../custom-class/questions-class/creator-write-sec/ChildClasses/slider.box";
import { Files } from "../../custom-class/questions-class/creator-write-sec/ChildClasses/file.box";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { url } from "../../app.config";
import {
  Observable,
  catchError,
  delay,
  pipe,
  retry,
  switchMap,
  timer,
} from "rxjs";
import { setLoadingTrue } from "../../pipe-operators/creator-section/http-loading.pipe";
import { LoadingService } from "../loading/loading.service";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { UploadStatusService } from "../readFile-single/upload-status/upload-status.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionsService } from "../creator-sections/session-error/sessions.service";

@Injectable({
  providedIn: "root",
})
export class HttpServiceService {
  sessionService = inject(SessionsService);
  router = inject(Router);
  loadingService = inject(LoadingService);
  httpService = inject(HttpClient);
  injector = inject(Injector);
  urlOfServer = this.injector.get(url);
  uploadStatus = inject(UploadStatusService);
  errorHandling = (errors: HttpErrorResponse) => {
    if (errors.status === 0) {
      return new Observable((a) => a.next("Unable to reach to server"));
    }
    if (errors.status <= 300) {
      return new Observable((a) => a.next(errors.error.text));
    } else {
      return new Observable((a) => a.next("Something went wrong"));
    }
  };

  get(url: string) {
    return this.httpService
      .get(`${this.urlOfServer}${url}`, {
        observe: "body",
        responseType: "json",
        withCredentials: true,
      })
      .pipe(catchError(this.errorHandling), retry(4));
  }

  post(url: string, body: any) {
    return this.httpService
      .post(`${this.urlOfServer}${url}`, body, {
        observe: "body",
        responseType: "text",
        withCredentials: true,
      })
      .pipe(
        retry({ count: 4, delay: (error: any, count: any) => timer(2000) }),
        catchError(this.errorHandling),
      );
  }

  constructor(private service: HttpClient) {}

  question() {
    let arrayOfQuestions: BaseQuestion[] = [
      new TextBox({ lable: "Name of recipe", key: "name", required: true }),
      new Slider({
        lable: "Give a difficulty ness level",
        key: "difficlutyLEvel",
        defaultValue: "2",
      }),

      new Slider({
        lable: "Give a healthy ness leve",
        key: "healyLevel",
        defaultValue: "2",
      }),
      new TextBox({
        lable: "Approx Price",
        key: "priceOfMeal",
        required: true,
      }),
      new TextBox({ lable: "Time to cook", key: "time", required: true }),
      new Files({ lable: "Uplad Images", key: "image" }),
    ];
    return arrayOfQuestions;
  }

  uploadImageToServer(
    dataToUpload: ArrayBuffer,
    url: string,
    fileEntension: string,
  ) {
    const chunks = 10000;
    let timesItRan = 0;
    const totalChunks = dataToUpload.byteLength / chunks;
    const shortName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    });

    const makeRequest = (
      index: number,
      endIndex: number,
      nameOfFile: string,
    ) => {
      this.httpService
        .post(url, dataToUpload.slice(index, endIndex), {
          responseType: "text",
          withCredentials: true,
          observe: "body",
          headers: new HttpHeaders({
            "file-name": nameOfFile + "." + fileEntension,
            "total-length": totalChunks + 1,
          }),
        })
        .pipe(catchError(this.errorHandling))
        .subscribe((res: any) => {
          /*If we have a error while uplaoading the image  to the api
          they will be handled in the thrid section of recieps form
          */
         
          if (res === "Unable to reach to server") {
            this.router.navigate(["/"]);
          } else if (res === "Something went wrong") {
            this.sessionService.setError(true);
          } else {
            timesItRan++;
            if (!res.includes(".") && res !== "error") {
              
              const progress = Math.floor(Number(res));
              this.uploadStatus.displayStatus.next(true);
              this.uploadStatus.progressStatus.next({
                name: "",
                status: progress,
              });
            } else {
              console.log('uplaod complete')
              this.uploadStatus.progressStatus.next({ name: res, status: 100 });
              this.uploadStatus.displayStatus.next(false);
            }
            if (!res.includes(".") && timesItRan <= totalChunks + 1) {
              makeRequest(index + chunks, endIndex + chunks, nameOfFile);
            }
          }
        });
    };
    makeRequest(0, chunks, shortName);
  }

  getRequest() {
    return new Observable((emmiter) => {
      emmiter.next("Sending req");
    }).pipe(
      setLoadingTrue(this.loadingService.state),
      switchMap(() => this.service.get(this.urlOfServer)),
    );
  }
}
