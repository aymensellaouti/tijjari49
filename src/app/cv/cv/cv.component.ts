import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.Service";
import { SayHellpService } from "../../services/say-hellp.service";
import { TodoService } from "../../todo/service/todo.service";
import { CvService } from "../services/cv.service";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [];
  date = new Date();

  constructor(
    private loggerService: LoggerService,
    private sayHellpService: SayHellpService,
    private todoService: TodoService,
    private cvService: CvService
  ) {
    this.sayHellpService.hello();
    this.loggerService.logger("Cc je suis le cvComponent");
    this.cvs = this.cvService.getCvs();
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
