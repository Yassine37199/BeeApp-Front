import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  public findUserByEmail(email : string) : Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/get/email/${email}`);
  }


}
