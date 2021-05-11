import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeAbonnement } from 'src/app/Models/demande-abonnement';
import { DemandeAbonnementService } from 'src/app/Services/demande-abonnement.service';

@Component({
  selector: 'app-add-demandes',
  templateUrl: './add-demandes.component.html',
  styleUrls: ['./add-demandes.component.css']
})
export class AddDemandesComponent implements OnInit {

  constructor(public demandeservice : DemandeAbonnementService , public router : Router) { }

  ngOnInit(): void {
  }

  public addDemande(addForm : NgForm) : void {
    this.demandeservice.addDemande(addForm.value).subscribe(
      (response : DemandeAbonnement) => {
        console.log(response);
        this.demandeservice.getDemandes();
        this.router.navigate(['list-demandes'])
      }
    )
  }

}
