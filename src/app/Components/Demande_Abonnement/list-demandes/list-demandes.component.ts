import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DemandeAbonnement } from 'src/app/Models/demande-abonnement';
import { DemandeAbonnementService } from 'src/app/Services/demande-abonnement.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RemarqueService } from 'src/app/Services/remarque.service';
import { Remarque } from 'src/app/Models/remarque';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.css']
})
export class ListDemandesComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  public demandes : DemandeAbonnement[];
  closeResult = '';
  demandeToDisplay : DemandeAbonnement
  remarques : Remarque[];
  

  dtTrigger : Subject<any> = new Subject<any>();
  constructor(private demandeservice : DemandeAbonnementService ,
              private router : Router,
              private modalService : NgbModal,
              private remarqueservice : RemarqueService) { }

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


  open(content , demande : DemandeAbonnement) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' , size : 'lg' , centered : true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.demandeToDisplay = demande
    this.getRemarquesByDemande(this.demandeToDisplay.idDemandeAbonnement);
    console.log(this.remarques);
  }

  openFormModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-form' , size : 'lg' , centered : true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  public addRemarque(addForm : NgForm) : void {
    if(window.confirm("Ajouter cette demande ?")){
    this.remarqueservice.addRemarqueInDemande(addForm.value).subscribe(
      (response : Remarque) => {
        console.log(response);
        this.remarqueservice.getRemarques();
        this.router.navigate(['list-demandes'])
      }
    )
  }
}

  public getRemarquesByDemande(idDemande : number){
    this.remarqueservice.getRemarquesByDemande(idDemande).subscribe(
      (response : Remarque[]) => this.remarques = response
    )
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  ngOnDestroy(): void  {
    this.dtTrigger.unsubscribe();
  }


}
