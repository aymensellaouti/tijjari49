import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Cv } from "../model/cv.model";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  // list(cvs)
  @Input() cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter<Cv>();

  onSelectCv(cv: Cv) {
    this.forwardCv.emit(cv);
  }
}
