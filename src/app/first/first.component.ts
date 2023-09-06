import { Component } from "@angular/core";
import { SayHellpService } from "../services/say-hellp.service";

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
  constructor(private hello: SayHellpService) {
    this.hello.getTodos().subscribe((todos) => console.log({ todos }));
  }

  hideShow() {
    this.isHidden = !this.isHidden;
    this.name += " test";
  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
