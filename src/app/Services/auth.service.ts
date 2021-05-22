import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : User;
  isLoggedIn = false;

  constructor(private userservice : UserService , private router : Router) {
   }
   


  async authenticate(username , password) {
      this.userservice.findUserByEmail(username).subscribe(
       async (response : User) => {
        await sessionStorage.setItem('user' , JSON.stringify(response))
        this.router.navigate([''])
       }
     )
      return true;
    }

  isUserLoggedIn(){
    return JSON.parse(sessionStorage.getItem('user'));
  }

  logout(){
    sessionStorage.removeItem('user')
  }
}
