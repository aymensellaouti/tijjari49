import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.Service";
import { SayHellpService } from "../../services/say-hellp.service";
import { TodoService } from "../../todo/service/todo.service";
import { CvService } from "../services/cv.service";
import { ToastrService } from "ngx-toastr";
import { catchError, distinctUntilChanged, Observable, of } from "rxjs";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs$: Observable<Cv[]>;
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
    this.cvs$ = this.cvService.getCvs().pipe(
      catchError((e) => {
        this.toastr.error(`Les données sont fake veuillez contacter l'admin`);
        return of(this.cvService.getFakeCvs());
      })
    );
    this.toastr.info("Bienvenu dans notre CvTech :)");
    // this.cvs$ = this.cvService.getCvs().subscribe({
    //   next: (cvs) => (this.cvs = cvs),
    //   error: (e) => {
    //     console.log(e);

    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`Les données sont fake veuillez contacter l'admin`);
    //   },
    // });
  }
}
