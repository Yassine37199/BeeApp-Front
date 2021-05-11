import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DemandeAbonnement } from 'src/app/Models/demande-abonnement';
import { ClientService } from 'src/app/Services/client.service';
import { DemandeAbonnementService } from 'src/app/Services/demande-abonnement.service';
import { Client } from 'src/app/Models/client';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.css']
})
export class ListDemandesComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  public demandes : DemandeAbonnement[];
  

  dtTrigger : Subject<any> = new Subject<any>();
  constructor(private demandeservice : DemandeAbonnementService , private clientservice : ClientService, private router : Router) { }

  ngOnInit(): void {
    this.getDemandes();
    
  }

  public getDemandes() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,

    };

    this.demandeservice.getDemandes().subscribe(
      (response : DemandeAbonnement[]) => {
        console.log(response);
        this.demandes = response;
        this.dtTrigger.next()
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  openUpdateDemande(myObj) {
    this.router.navigate(['update-demande/' + myObj['idDemandeAbonnement']])
  }


  ngOnDestroy(): void  {
    this.dtTrigger.unsubscribe();
  }


}
