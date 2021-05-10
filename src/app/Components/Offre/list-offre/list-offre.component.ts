import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Offre } from 'src/app/Models/offre';
import { OffresService } from 'src/app/Services/offres.service';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  public offres : Offre[];
  

  dtTrigger : Subject<any> = new Subject<any>();

  constructor(private offreservice : OffresService , private router : Router) { }

  ngOnInit(): void {
    this.getOffres();
    console.log(this.offres);
  }

  public getOffres() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,

    };

    this.offreservice.getOffres().subscribe(
      (response : Offre[]) => {
        console.log(response);
        this.offres = response;
        this.dtTrigger.next()
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  openUpdateOffre(myObj) {
    this.router.navigate(['update-offre/' + myObj['idOffre']])
  }

  ngOnDestroy(): void  {
    this.dtTrigger.unsubscribe();
  }
}
