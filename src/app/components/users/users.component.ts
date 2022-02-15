import { Component, OnInit } from '@angular/core';
import { User } from '../../model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})  
export class UsersComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService, private router: Router ) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => { 
      this.users = users.map(user => {
        user.permissionNames = user.permissions.map(p => p.name)
        return user;
      });
    });
  }

  editUser(user: any) {
    this.router.navigate(['/edit-user'], { queryParams: user });
  }

}
