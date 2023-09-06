import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.Service";
import { CvService } from "../services/cv.service";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input() cv: Cv | null = null;
  constructor(private cvService: CvService) {
    this.cvService.selectCv$.pipe(distinctUntilChanged()).subscribe({
      next: (cv) => (this.cv = cv),
    });
  }
}
