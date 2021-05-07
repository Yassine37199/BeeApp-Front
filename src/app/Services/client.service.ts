import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from 'src/app/Models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }
  
  
  public getClients() : Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiServerUrl}/client/list`);
  }

  // Ajouter Un Client
  


}
