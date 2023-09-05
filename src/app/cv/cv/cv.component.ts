import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(
      1,
      "sellaouti",
      "aymen",
      "teacher",
      "rotating_card_profile3.png",
      "111&",
      41
    ),
    new Cv(
      2,
      "sellaouti",
      "skander",
      "teacher",
      "rotating_card_profile2.png",
      "122",
      4
    ),
  ];
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
