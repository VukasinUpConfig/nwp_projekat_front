import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  jwt: string

  isLoggedIn: boolean;

  constructor(private userService: UserService) {
    this.username = "";
    this.password = "";
    this.jwt = this.userService.getJWT();
    this.isLoggedIn = this.jwt ? true : false;
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(jwt => {
      this.userService.setJWT(jwt.jwt);
      this.jwt = jwt.jwt;
      this.isLoggedIn = true;
    });
  }

  logout() {
    this.userService.setJWT("");
    this.isLoggedIn = false;
  }

}
