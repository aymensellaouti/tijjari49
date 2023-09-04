import { Component } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent {
  // moumathel mta3 hidden
  isHidden = false;
  name = "aymen";
  message = "";
  constructor() {}

  hideShow() {
    this.isHidden = !this.isHidden;
    this.name += " test";
  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
