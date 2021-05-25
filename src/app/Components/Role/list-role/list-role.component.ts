import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Role } from 'src/app/Models/role';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css'],
})
export class ListRoleComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

}
