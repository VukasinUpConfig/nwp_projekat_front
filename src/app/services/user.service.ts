import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { Jwt, UserLogin } from '../model';

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
    let headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
    }
    return this.httpClient.post<Jwt>(
      link, 
      { username, password }, 
      { headers }
    )
  }
}
