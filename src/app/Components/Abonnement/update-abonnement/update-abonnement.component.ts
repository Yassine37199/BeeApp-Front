import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonnement } from 'src/app/Models/abonnement';
import { AbonnementService } from 'src/app/Services/abonnement.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-update-abonnement',
  templateUrl: './update-abonnement.component.html',
  styleUrls: ['./update-abonnement.component.css']
})
export class UpdateAbonnementComponent implements OnInit {

  public id;
  public abonnementToUpdate : Abonnement

  constructor(private abonnementservice : AbonnementService ,
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

    this.abonnementservice.getAbonnement(this.id).subscribe(
      response => {
        this.abonnementToUpdate = response;
      }
    )
  }


public onUpdateAbonnement(abonnement : Abonnement) : void {
  if(window.confirm("Modifier cet abonnement ?")){
      this.abonnementservice.updateAbonnement(this.id , abonnement).subscribe(
        (response : Abonnement) => {
          console.log(response);
          this.abonnementservice.getAbonnements();
          this.router.navigate(['list-abonnements']);
          
        },
        (error : HttpErrorResponse) => {alert(error.message);
        }
      );
    }
  }

}
