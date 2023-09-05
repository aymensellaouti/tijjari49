import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.Service";

@Injectable({
  providedIn: "root",
})
export class SayHellpService {
  constructor(private loggerService: LoggerService) {}
  hello() {
    this.loggerService.logger("Hello :D");
  }
}
