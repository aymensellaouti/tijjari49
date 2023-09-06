import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.Service";
import { SayHellpService } from "../../services/say-hellp.service";
import { TodoService } from "../../todo/service/todo.service";
import { CvService } from "../services/cv.service";
import { ToastrService } from "ngx-toastr";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs: Cv[] = [];
  date = new Date();
  nb = 0;
  constructor(
    private loggerService: LoggerService,
    private sayHellpService: SayHellpService,
    private todoService: TodoService,
    private cvService: CvService,
    private toastr: ToastrService
  ) {
    this.cvService.selectCv$.pipe(distinctUntilChanged()).subscribe(() => {
      this.nb++;
    });
    this.sayHellpService.hello();
    this.loggerService.logger("Cc je suis le cvComponent");
    this.cvs = this.cvService.getCvs();
    this.toastr.info("Bienvenu dans notre CvTech :)");
  }
}
