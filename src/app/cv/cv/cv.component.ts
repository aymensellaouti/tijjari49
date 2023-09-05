import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.Service";
import { SayHellpService } from "../../services/say-hellp.service";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  selectedCv: Cv | null = null;

  date = new Date();
  cvs: Cv[] = [
    new Cv(1, "sellaouti", "aymen", "teacher", "", "111&", 41),
    new Cv(2, "sellaouti", "skander", "teacher", "", "122", 4),
    new Cv(
      3,
      "sellaouti",
      "skander",
      "teacher",
      "rotating_card_profile3.png",
      "122",
      4
    ),
  ];
  constructor(
    private loggerService: LoggerService,
    private sayHellpService: SayHellpService
  ) {
    this.sayHellpService.hello();
    this.loggerService.logger("Cc je suis le cvComponent");
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
