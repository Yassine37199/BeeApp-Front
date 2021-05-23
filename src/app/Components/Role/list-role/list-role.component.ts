import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Role } from 'src/app/Models/role';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  public roles : Role[];
  

  dtTrigger : Subject<any> = new Subject<any>();

  constructor(private roleservice : RoleService , private router : Router) { }

  ngOnInit(): void {
    this.getRoles();
    console.log(this.roles);
  }

  public getRoles() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,

    };

    this.roleservice.getRoles().subscribe(
      (response : Role[]) => {
        console.log(response);
        this.roles = response;
        this.dtTrigger.next()
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  openUpdateRole(myObj) {
    this.router.navigate(['update-role/' + myObj['id']])
  }

  ngOnDestroy(): void  {
    this.dtTrigger.unsubscribe();
  }

}
