import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  
  public id;
  public clientToUpdate : Client

  constructor(private clientservice : ClientService , private router : Router , private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log(this.id);
      } 
    );

    this.clientservice.getClient(this.id).subscribe(
      response => {
        this.clientToUpdate = response;
      }
    )
  }


public onUpdateClient(client : Client) : void {
      if(window.confirm("Modifier ce client ?")){
      this.clientservice.updateClient(this.id , client).subscribe(
        (response : Client) => {
          console.log(response);
          this.clientservice.getClients();
          this.router.navigate(['list-clients']);
        },
        (error : HttpErrorResponse) => {alert(error.message);
        }
      );
    }
  }



}
