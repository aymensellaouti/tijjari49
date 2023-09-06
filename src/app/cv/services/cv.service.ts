import { Injectable } from "@angular/core";
import { Cv } from "../model/cv.model";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CvService {
  private selectCvSubject = new Subject<Cv>();
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
  selectCv$: Observable<Cv> = this.selectCvSubject.asObservable();
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }

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
