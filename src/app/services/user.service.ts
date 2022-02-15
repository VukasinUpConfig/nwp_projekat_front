import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { Jwt, User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = environment.apiUrl
  
  constructor(private httpClient: HttpClient) { }

  getJWT(): string {
    let jwt = localStorage.getItem('jwt');
    return jwt ? jwt : "";
  }

  setJWT(jwt: string): void {
    localStorage.setItem("jwt", jwt);
  }

  login(username: string, password: string): Observable<Jwt> {
    let link = `${this.apiUrl}/auth/login`;
    return this.httpClient.post<Jwt>(link, { username, password })
  }

  getUsers(): Observable<User[]> {
    let link = `${this.apiUrl}/api/users`;
    let headers = new HttpHeaders().set('Authorization',  `Bearer ${this.getJWT()}`)
    return this.httpClient.get<User[]>(link, { headers });
  }

  addUser(payload: any): Observable<User[]> {
    let link = `${this.apiUrl}/api/users`;
    let headers = new HttpHeaders().set('Authorization',  `Bearer ${this.getJWT()}`)
    return this.httpClient.post<User[]>(link, payload, { headers });
  }

  editUser(payload: any): Observable<User[]> {
    let link = `${this.apiUrl}/api/users`;
    let headers = new HttpHeaders().set('Authorization',  `Bearer ${this.getJWT()}`)
    return this.httpClient.put<User[]>(link, payload, { headers });
  }
}
