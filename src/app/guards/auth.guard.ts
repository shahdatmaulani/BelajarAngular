import { CanActivateFn, Router} from '@angular/router';
import {inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = checkAuthentication();
  const routeMod =  inject(Router);

  if (!isAuthenticated) {
    // redirect to login page
    routeMod.navigate(['login']);
    return false;
  }
  return true;
};

function checkAuthentication() {
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin === null) {
    return false;
  } else if (isLogin === "true") {
    return true;
  }

  return false;
}
