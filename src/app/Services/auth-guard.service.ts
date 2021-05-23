import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private router : Router, private authservice : AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentUser = this.authservice.isUserLoggedIn();
    if(currentUser){
      if(route.data.roles && route.data.roles.indexOf(currentUser.role.nomrole) === -1){
        this.router.navigate(['/unauthorized']);
        return false;
      }
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
 