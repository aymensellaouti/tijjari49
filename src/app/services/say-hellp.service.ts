import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.Service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SayHellpService {
  constructor(
    private loggerService: LoggerService,
    private httpClient: HttpClient
  ) {}
  hello() {
    this.loggerService.logger("Hello :D");
  }

  getTodos(): Observable<unknown> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }
}
