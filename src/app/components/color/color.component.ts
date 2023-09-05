import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"],
})
export class ColorComponent implements OnInit {
  ngOnInit(): void {
    this.bgc = this.defaultColor;
  }
  @Input() defaultColor = "red";
  bgc = this.defaultColor;
  changeColor(newColor: string) {
    this.bgc = newColor;
  }
}
