import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configComponentVisits: number;

  constructor() {
    this.configComponentVisits = 0;
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  getToken(): string {
    let token = localStorage.getItem("token");
    return token ? token : "";
  }

}
