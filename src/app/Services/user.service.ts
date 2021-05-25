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

  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/list`);
  }

  public findUserByEmail(email : string) : Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/get/email/${email}`);
  }

  public addUser(user : User , idRole : number) : Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/add/${idRole}` , user);
  }


}
