import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeAbonnement } from 'src/app/Models/demande-abonnement';
import { DemandeAbonnementService } from 'src/app/Services/demande-abonnement.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-update-demandes',
  templateUrl: './update-demandes.component.html',
  styleUrls: ['./update-demandes.component.css']
})
export class UpdateDemandesComponent implements OnInit {

  
  public id;
  public demandeToUpdate : DemandeAbonnement

  constructor(private demandeservice : DemandeAbonnementService ,
              private router : Router ,
             private route : ActivatedRoute,
             public toastService: ToastService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log(this.id);
      }
    );

    this.demandeservice.getDemande(this.id).subscribe(
      response => {
        this.demandeToUpdate = response;
      }
    )
  }


public onUpdateDemande(demande : DemandeAbonnement) : void {
  if(window.confirm("Modifier cette demande ?")){
      this.demandeservice.updateDemande(this.id , demande).subscribe(
        (response : DemandeAbonnement) => {
          this.showSuccess();
          console.log(response);
          this.demandeservice.getDemandes();
          this.router.navigate(['list-demandes']);
          
        },
        (error : HttpErrorResponse) => {alert(error.message);
        }
      );
    }
  }


showSuccess() {
      this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }


}
