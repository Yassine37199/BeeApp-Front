import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Modem } from '../Models/modem';

@Injectable({
  providedIn: 'root'
})
export class ModemService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }
  
  
  public getModems() : Observable<Modem[]> {
    return this.http.get<Modem[]>(`${this.apiServerUrl}/configmodem/list`);
  }
  

  // Ajouter Un Modem
  public addModem(modem : Modem) : Observable<Modem> {
    return this.http.post<Modem>(`${this.apiServerUrl}/configmodem/add/8` , modem);
  }


}
