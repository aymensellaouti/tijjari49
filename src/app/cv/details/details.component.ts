import { Component } from "@angular/core";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "../../config/app-routes.config";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../auth/service/auth.service";

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
    private toaster: ToastrService,
    public authService: AuthService
  ) {
    const id = this.acr.snapshot.params["id"];
    this.cvService.getCvById(+id).subscribe({
      next: (cv) => (this.cv = cv),
      error: () => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id).subscribe({
        next: () => {
          this.toaster.success(`${this.cv?.name} a été supprimé avec succès`);
          this.router.navigate([APP_ROUTES.cv]);
        },
      });
    }
  }
}
