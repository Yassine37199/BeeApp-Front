import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : User;

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
    let user = sessionStorage.getItem('user')
    return user;
  }

  logout(){
    sessionStorage.removeItem('user')
  }
}
