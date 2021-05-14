import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { Abonnement } from 'src/app/Models/abonnement';
import { Remarque } from 'src/app/Models/remarque';
import { AbonnementService } from 'src/app/Services/abonnement.service';
import { RemarqueService } from 'src/app/Services/remarque.service';

@Component({
  selector: 'app-list-abonnement',
  templateUrl: './list-abonnement.component.html',
  styleUrls: ['./list-abonnement.component.css']
})
export class ListAbonnementComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  public abonnements : Abonnement[];
  closeResult = '';
  abonnementToDisplay : Abonnement;
  remarques : Remarque[];
  

  dtTrigger : Subject<any> = new Subject<any>();
  constructor(private abonnementservice : AbonnementService ,
              private router : Router,
              private modalService : NgbModal,
              private remarqueservice : RemarqueService) { }

  ngOnInit(): void {
    this.getAbonnements();
    
  }

  public getAbonnements() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,

    };

    this.abonnementservice.getAbonnements().subscribe(
      (response : Abonnement[]) => {
        console.log(response);
        this.abonnements = response;
        this.dtTrigger.next()
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )

    this.remarqueservice.getRemarques().subscribe(
      (response : Remarque[]) => {
        this.remarques = response;
      }
    )
  }

 


  openUpdateAbonnement(myObj) {
    this.router.navigate(['update-abonnement/' + myObj['idAbonnement']])
  }


  open(content , abonnement : Abonnement) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' , size : 'lg' , centered : true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.abonnementToDisplay = abonnement;
    this.getRemarquesByAbonnement(this.abonnementToDisplay.idAbonnement);
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
    this.remarqueservice.addRemarqueInAbonnement(addForm.value).subscribe(
      (response : Remarque) => {
        console.log(response);
        this.remarqueservice.getRemarques();
        this.router.navigate(['list-abonnements'])
      }
    )
  }
}

  public getRemarquesByAbonnement(idAbonnement : number){
    this.remarqueservice.getRemarquesByAbonnement(idAbonnement).subscribe(
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
