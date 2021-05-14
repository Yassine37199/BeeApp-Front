import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Abonnement } from 'src/app/Models/abonnement';
import { AbonnementService } from 'src/app/Services/abonnement.service';

@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.css']
})
export class AddAbonnementComponent implements OnInit {

  constructor(private abonnementservice : AbonnementService,
              private router : Router) { }

  ngOnInit(): void {
  }

  public addAbonnement(addForm : NgForm) : void {

    if(window.confirm("Ajouter cette demande ?")){
    this.abonnementservice.addAbonnement(addForm.value).subscribe(
      (response : Abonnement) => {
        console.log(response);
        this.abonnementservice.getAbonnements();
        this.router.navigate(['list-abonnements'])
      }
    )
  }
}

}
