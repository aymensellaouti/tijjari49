import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.Service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input() cv: Cv | null = null;
}
