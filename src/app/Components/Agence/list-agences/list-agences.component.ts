import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Agence } from 'src/app/Models/agence';
import { AgenceService } from 'src/app/Services/agence.service';

@Component({
  selector: 'app-list-agences',
  templateUrl: './list-agences.component.html',
  styleUrls: ['./list-agences.component.css']
})
export class ListAgencesComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  public agences : Agence[];
  

  dtTrigger : Subject<any> = new Subject<any>();
  constructor(private agenceservice : AgenceService , private router : Router) { }

  ngOnInit(): void {
    this.getAgences();
    console.log(this.agences);
  }

  public getAgences() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,

    };

    this.agenceservice.getAgences().subscribe(
      (response : Agence[]) => {
        console.log(response);
        this.agences = response;
        this.dtTrigger.next()
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }




  openUpdateAgence(myObj) {
    this.router.navigate(['update-agence/' + myObj['id_agence']])
  }

  ngOnDestroy(): void  {
    this.dtTrigger.unsubscribe();
  }

}
