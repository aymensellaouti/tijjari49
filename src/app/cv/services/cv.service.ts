import { Injectable } from "@angular/core";
import { Cv } from "../model/cv.model";

@Injectable({
  providedIn: "root",
})
export class CvService {
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
  constructor() {}

  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }

  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
}
