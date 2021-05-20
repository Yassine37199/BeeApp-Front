import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  tickets : Ticket[];
  countTickets = 0;
  countTicketsResolu = 0;

  constructor(private ticketservice : TicketService) { }

  ngOnInit(): void {

    this.getTicketsCount();
  }

  getTicketsCount(){
    this.ticketservice.getTickets().subscribe(
      response => {
        this.tickets = response
        console.log(this.tickets)
        this.countTickets = this.tickets.reduce((acc , ticket) => acc + 1 , 0);
        console.log(this.countTickets)
        this.countTicketsResolu = this.tickets.reduce((acc , ticket) => {
          if (ticket.dateResolution == null) return acc + 1
          else return acc
        }, 0)
        console.log(this.countTicketsResolu);
      }
    )
  }

}
