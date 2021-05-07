import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/Services/client.service';
import { Client } from 'src/Models/client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  public clients : Client[];

  constructor(private clientservice : ClientService) { }

  ngOnInit(): void {
    this.getClients();
    console.log(this.clients);
  }

  public getClients() : void {
    this.clientservice.getClients().subscribe(
      (response : Client[]) => {
        this.clients = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }



}
