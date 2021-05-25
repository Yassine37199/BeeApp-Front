import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Role } from 'src/app/Models/role';
import { User } from 'src/app/Models/user';
import { RoleService } from 'src/app/Services/role.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.css']
})
export class AjoutUserComponent implements OnInit {

  roles;
  public nomrole : any;

  constructor(private userservice : UserService , private router : Router , private rolesservice : RoleService) { }

  ngOnInit(): void {
    this.rolesservice.getRoles().subscribe(
      (response : Role[]) => {
        this.roles = response.map(role => role.nomrole)
      }
    ) 
  }

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.roles
        : this.roles.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  
  public addUser(addForm : NgForm) : void {
    this.rolesservice.getRoleByNom(this.nomrole).subscribe(
      (response) => {
        console.log(response.id);
        if (window.confirm("Ajouter cet utilisateur ? ")) {
          let user = {
            ...addForm.value,
            active : "active"
          }
          this.userservice.addUser(user , response.id).subscribe(
            (response : User) => {
              console.log(response);
              this.userservice.getUsers();
              this.router.navigate(['list-users'])
            }
          )
        }

      }
    )
    
}

}
