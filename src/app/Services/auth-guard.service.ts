import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router : Router, private authservice : AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)   {
    if(this.authservice.isUserLoggedIn()) return true;
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
