import { Component } from "@angular/core";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "../../config/app-routes.config";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  cv!: Cv | null;
  constructor(
    private cvService: CvService,
    private acr: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService
  ) {
    const id = this.acr.snapshot.params["id"];
    this.cv = this.cvService.getCvById(+id);
    if (!this.cv) this.router.navigate([APP_ROUTES.cv]);
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.toaster.success(`${this.cv.name} a été supprimé avec succès`);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
