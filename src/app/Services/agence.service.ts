import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agence } from '../Models/agence';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }
  
  
  public getAgences() : Observable<Agence[]> {
    return this.http.get<Agence[]>(`${this.apiServerUrl}/agence/list`);
  }
  
  
  public getAgence(idAgence : number) : Observable<Agence> {
    return this.http.get<Agence>(`${this.apiServerUrl}/agence/${idAgence}`);
  }

  
  // Ajouter Une agence
  public addAgence(agence : Agence) : Observable<Agence> {
    return this.http.post<Agence>(`${this.apiServerUrl}/agence/add` , agence);
  }


  // Modifier une agence
  public updateAgence(idAgence : number , agence : Agence) : Observable<Agence> {
    return this.http.put<Agence>(`${this.apiServerUrl}/agence/update/${idAgence}` , agence);
  }
}
