import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/Models/role';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-ajout-role',
  templateUrl: './ajout-role.component.html',
  styleUrls: ['./ajout-role.component.css']
})
export class AjoutRoleComponent implements OnInit {

  constructor(private roleservice : RoleService , private router : Router) { }

  ngOnInit(): void {
  }

  public addRole(addForm : NgForm) : void {
    if(window.confirm("Ajouter ce Role ?")){
    this.roleservice.addRole(addForm.value).subscribe(
      (response : Role) => {
        console.log(response);
        this.roleservice.getRoles();
        this.router.navigate(['list-users'])
      }
    )
  }
}

}
