import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agence } from 'src/app/Models/agence';
import { AgenceService } from 'src/app/Services/agence.service';

@Component({
  selector: 'app-update-agence',
  templateUrl: './update-agence.component.html',
  styleUrls: ['./update-agence.component.css']
})
export class UpdateAgenceComponent implements OnInit {

  public id;
  public agenceToUpdate : Agence

  constructor(private agenceservice : AgenceService , private router : Router , private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log(this.id);
      } 
    );

    this.agenceservice.getAgence(this.id).subscribe(
      response => {
        this.agenceToUpdate = response;
      }
    )
  }


public onUpdateAgence(agence : Agence) : void {
      this.agenceservice.updateAgence(this.id , agence).subscribe(
        (response : Agence) => {
          console.log(response);
          this.agenceservice.getAgences();
          this.router.navigate(['list-agences']);
        },
        (error : HttpErrorResponse) => {alert(error.message);
        }
      );
    }

}
