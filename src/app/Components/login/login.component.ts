import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  invalidLogin = false;
  user;

  successMessage = "Authentication success";
  errorMessage = "Invalide username or password"

  constructor(private router : Router,
              private loginservice : AuthService,
              private userservice : UserService) { }

  ngOnInit(): void {
  }

  checkLogin(){
    this.userservice.findUserByEmail(this.username).subscribe(
      response => {
        if(response) {
          if (this.password === response.password) {
            this.user = response
            console.log(this.user.email);
            this.loginservice.authenticate(this.username , this.password)
        } 
        else this.invalidLogin = true
        } 
        else this.invalidLogin = true
      }
    )
}
}
