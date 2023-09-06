import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../auth/service/auth.service";
import { APP_ROUTES } from "../../config/app-routes.config";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}
  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
