import { Injectable } from "@angular/core";
import { Cv } from "../model/cv.model";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { API } from "../../config/api.config";

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

  constructor(private http: HttpClient) {}

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }

  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }

  deleteCv(id: number): Observable<Cv> {
    return this.http.delete<Cv>(API.cv + id);
  }
  addCv(cv: Cv): Observable<Cv> {
    // const params = new HttpParams().set(
    //   "access_token",
    //   localStorage.getItem("token") ?? ""
    // );
    return this.http.post<Cv>(API.cv, cv);
  }

  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }

  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
}
