import { CanActivateFn } from "@angular/router";

export const authFGuard: CanActivateFn = (route, state) => {
  return true;
};
