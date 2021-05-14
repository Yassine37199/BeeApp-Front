import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Remarque } from '../Models/remarque';

@Injectable({
  providedIn: 'root'
})
export class RemarqueService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }
  
  
  public getRemarques() : Observable<Remarque[]> {
    return this.http.get<Remarque[]>(`${this.apiServerUrl}/remarque/get/all`);
  }


  public getRemarquesByDemande(idDemande : number) : Observable<Remarque[]> {
    return this.http.get<Remarque[]>(`${this.apiServerUrl}/remarque/get/demande/${idDemande}`)
  }

  public getRemarquesByAbonnement(idAbonnement : number) : Observable<Remarque[]> {
    return this.http.get<Remarque[]>(`${this.apiServerUrl}/remarque/get/abonnement/${idAbonnement}`)
  } 
  

  // Ajouter Une Remarque au demande d'abonnement
  public addRemarqueInDemande(remarque : Remarque) : Observable<Remarque> {
    return this.http.post<Remarque>(`${this.apiServerUrl}/remarque/adddem/7/1` , remarque);
  }

  // Ajouter Une Remarque au demande d'abonnement
  public addRemarqueInAbonnement(remarque : Remarque) : Observable<Remarque> {
    return this.http.post<Remarque>(`${this.apiServerUrl}/remarque/addabn/15/1` , remarque);
  }

}