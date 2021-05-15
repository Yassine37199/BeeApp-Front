import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  
  idAbonnement;

  constructor(private ticketservice : TicketService,
    private router : Router,
    private route : ActivatedRoute) { }

    ngOnInit(): void {

      this.route.paramMap.subscribe(
        params => {
          this.idAbonnement = params.get('idAbonnement');
          console.log(this.idAbonnement);
        }
      );
    }

    public addTicket(addForm : NgForm , idAbonnement) : void {
       if(window.confirm("Ajouter cette Ticket ?")){
          this.ticketservice.addTicket(addForm.value , idAbonnement).subscribe(
          (response : Ticket) => {
          console.log(response);
          this.ticketservice.getTicketsByDemande(idAbonnement);
          this.router.navigate(['list-tickets/' + idAbonnement]);
    }
    )
}
}

}
