import { Component } from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"],
})
export class ColorComponent {
  defaultColor = "red";
  bgc = this.defaultColor;
  changeColor(newColor: string) {
    this.bgc = newColor;
  }
}
