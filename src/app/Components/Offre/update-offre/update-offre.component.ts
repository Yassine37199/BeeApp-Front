import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/Models/offre';
import { OffresService } from 'src/app/Services/offres.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {

  public id;
  public offreToUpdate : Offre;

  constructor(private offreservice : OffresService , private router : Router , private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log(this.id);
      } 
    );

    this.offreservice.getOffre(this.id).subscribe(
      response => {
        this.offreToUpdate = response;
      }
    )
  }


public onUpdateOffre(offre : Offre) : void {
  if(window.confirm("Modifier cet Offre ?")){
      this.offreservice.updateOffre(this.id , offre).subscribe(
        (response : Offre) => {
          console.log(response);
          this.offreservice.getOffres();
          this.router.navigate(['list-offres']);
        },
        (error : HttpErrorResponse) => {alert(error.message);
        }
      );
    }
  }


}
