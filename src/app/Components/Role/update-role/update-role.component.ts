import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/Models/role';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  public id;
  public RoleToUpdate : Role;

  constructor(private roleservice : RoleService , private router : Router , private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log(this.id);
      } 
    );

    this.roleservice.getRole(this.id).subscribe(
      response => {
        this.RoleToUpdate = response;
      }
    )
  }


public onUpdateRole(role : Role) : void {
  if(window.confirm("Modifier cet Offre ?")){
      this.roleservice.updateRole(this.id , role).subscribe(
        (response : Role) => {
          console.log(response);
          this.roleservice.getRoles();
          this.router.navigate(['list-roles']);
        },
        (error : HttpErrorResponse) => {alert(error.message);
        }
      );
    }
  }

}
