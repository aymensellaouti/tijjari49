import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "input[appRainbow]",
})
export class RainbowDirective {
  // Quel propiétés
  @HostBinding("style.color") color = "black";
  @HostBinding("style.borderColor") bc = "green";
  @HostBinding("style.border") border = "3px solid";
  constructor(private el: ElementRef) {}

  // Quel comportements
  @HostListener("keyup") onKeyUp() {
    this.bc = this.color = this.getRandomColor();
  }

  private getRandomColor(): string {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}
