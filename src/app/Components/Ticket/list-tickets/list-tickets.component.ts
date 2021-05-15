import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Commentaire } from 'src/app/Models/commentaire';
import { Ticket } from 'src/app/Models/ticket';
import { CommentaireService } from 'src/app/Services/commentaire.service';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  dtOptions : DataTables.Settings = {};
  public tickets : Ticket[];
  closeResult = '';
  idAbonnement;
  TicketToDisplay : Ticket;
  commentaires = [];
  

  dtTrigger : Subject<any> = new Subject<any>();
  constructor(private ticketService : TicketService,
              private commentaireservice : CommentaireService,
              private router : Router,
              private modalService : NgbModal,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.idAbonnement = params.get('idAbonnement');
        console.log(this.idAbonnement);
        this.getTicketsByAbonnements(this.idAbonnement);
      }
    );
    
  }

  public getTicketsByAbonnements(idAbonnement) : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,

    };

    this.ticketService.getTicketsByDemande(idAbonnement).subscribe(
      (response : Ticket[]) => {
        console.log(response);
        this.tickets = response;
        this.dtTrigger.next()
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

 


  openUpdateTicket(myObj) {
    this.router.navigate(['update-ticket/' + myObj['idTicket']])
  }

  openAddTicket(idAbonnement){
    this.router.navigate(['ajout-ticket/' + idAbonnement])
  }

  open(content , ticket : Ticket) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' , size : 'lg' , centered : true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.TicketToDisplay = ticket;
    this.getCommentByTicket(this.TicketToDisplay.idTicket);
    console.log(this.commentaires);
  }

  openFormModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-form' , size : 'lg' , centered : true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  public addCommentaire(addForm : NgForm) : void {
    if(window.confirm("Ajouter ce commentaire ?")){
    this.commentaireservice.addComment(addForm.value , this.TicketToDisplay.idTicket).subscribe(
      (response : Commentaire) => {
        console.log(response);
        this.commentaireservice.getCommentByTicket(this.TicketToDisplay.idTicket);
      }
    )
  }
}

  public getCommentByTicket(idTicket : number){
    this.commentaireservice.getCommentByTicket(idTicket).subscribe(
      (response : Commentaire[]) => this.commentaires = response
    )
  }


  public resolutionTicket(ticket : Ticket){
    ticket = {
      ...ticket,
      dateResolution : new Date()
    }
    this.ticketService.updateTicket(ticket.idTicket , ticket).subscribe(
      response => {
        console.log(response);
        this.getTicketsByAbonnements(this.idAbonnement);
      }
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
