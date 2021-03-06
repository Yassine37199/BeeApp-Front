import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = JSON.parse(sessionStorage.getItem('user'));

  constructor(public authservice : AuthService) { }

  ngOnInit(): void {
    
  }


}
