import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-fils",
  templateUrl: "./fils.component.html",
  styleUrls: ["./fils.component.css"],
})
export class FilsComponent {
  @Output() sendDataToPapa = new EventEmitter<string>();

  @Input() messageDePapa = "hello";

  onSendDataToPapa() {
    this.sendDataToPapa.emit("salam Baba");
  }
}
