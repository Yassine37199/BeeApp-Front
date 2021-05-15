import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonnement } from 'src/app/Models/abonnement';
import { Ticket } from 'src/app/Models/ticket';
import { AbonnementService } from 'src/app/Services/abonnement.service';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  public id;
  public ticketToUpdate;
  public idAbonnement;
  public abonnement : Abonnement;

  constructor(private ticketservice : TicketService ,
              private router : Router ,
              private route : ActivatedRoute,
              private abonnementservice : AbonnementService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        console.log(this.id);
      } 
    );

    this.ticketservice.getTicket(this.id).subscribe(
      response => {
        this.ticketToUpdate = response;
        this.idAbonnement = this.ticketToUpdate.abonnement.idAbonnement;
        this.abonnementservice.getAbonnement(this.idAbonnement).subscribe(
          response => this.abonnement = response
        )
      }
    )
  }



public onUpdateTicket(ticket : Ticket) : void {
     if(window.confirm("Modifier cette ticket ?")){
      ticket = {
        ...ticket,
        dateResolution : this.ticketToUpdate.dateResolution,
        dateCreation : this.ticketToUpdate.dateCreation,
        abonnement : this.abonnement

      }
      console.log(ticket)
      this.ticketservice.updateTicket(this.id , ticket).subscribe(
        (response : Ticket) => {
          console.log(response);
          this.ticketservice.getTicketsByDemande(this.idAbonnement);
          this.router.navigate(['list-tickets/'+ this.idAbonnement]);
        },
        (error : HttpErrorResponse) => {alert(error.message);
        }
      );
    }
  }

}
