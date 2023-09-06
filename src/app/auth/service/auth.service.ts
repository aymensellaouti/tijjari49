import { Injectable } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { Observable, tap } from "rxjs";
import { LoginResponse } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { API } from "../../config/api.config";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: CredentialsDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(API.login, credentials).pipe(
      tap((response) => {
        localStorage.setItem("token", response.id);
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }
}
