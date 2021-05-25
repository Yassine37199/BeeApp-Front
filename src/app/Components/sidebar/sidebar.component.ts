import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Models/role';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  role;

  constructor(public authservice : AuthService) { }

  ngOnInit(): void {
    this.role = JSON.parse(sessionStorage.getItem('user')).role.nomrole;
    
  }

}
