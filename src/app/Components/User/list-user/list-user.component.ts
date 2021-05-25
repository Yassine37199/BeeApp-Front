import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  
  dtOptions : DataTables.Settings = {};
  public users : User[];
  

  dtTrigger : Subject<any> = new Subject<any>();

  constructor(private userservice : UserService  , private router : Router) { }

  ngOnInit(): void {
    this.getUsers();
    console.log(this.users);
  }

  public getUsers() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,

    };

    this.userservice.getUsers().subscribe(
      (response : User[]) => {
        console.log(response);
        this.users = response;
        this.dtTrigger.next()
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  openUpdateUser(myObj) {
    this.router.navigate(['update-user/' + myObj['idUser']])
  }

  ngOnDestroy(): void  {
    this.dtTrigger.unsubscribe();
  }

}
