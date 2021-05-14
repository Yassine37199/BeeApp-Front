import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from '../Models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }


  public getTickets() : Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiServerUrl}/ticket/get/all`);
  }
  
  
  public getTicket(idTicket : number) : Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiServerUrl}/ticket/get/${idTicket}`);
  }
}
