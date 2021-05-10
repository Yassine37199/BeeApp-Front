import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientService } from 'src/app/Services/client.service';
import { Client } from 'src/app/Models/client';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  
  dtOptions : DataTables.Settings = {};
  public clients : Client[];
  

  dtTrigger : Subject<any> = new Subject<any>();
  constructor(private clientservice : ClientService , private router : Router) { }

  ngOnInit(): void {
    this.getClients();
    console.log(this.clients);
  }

  public getClients() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,

    };

    this.clientservice.getClients().subscribe(
      (response : Client[]) => {
        console.log(response);
        this.clients = response;
        this.dtTrigger.next()
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  openUpdateClient(myObj) {
    this.router.navigate(['update-client/' + myObj['idClient']])
  }

  ngOnDestroy(): void  {
    this.dtTrigger.unsubscribe();
  }

  


}
