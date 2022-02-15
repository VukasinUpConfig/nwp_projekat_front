import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  message: string = ""

  username: string = ""
  password: string = ""
  firstName: string = ""
  lastName: string = ""
  selectedPermissions: string[] = []
  permissions: string[] = [
    "CAN_READ_USERS", "CAN_CREATE_USERS", 
    "CAN_UPDATE_USERS", "CAN_DELETE_USERS",
    "CAN_SEARCH_MACHINES", "CAN_START_MACHINES", "CAN_STOP_MACHINES",
    "CAN_RESTART_MACHINES", "CAN_CREATE_MACHINES", "CAN_DESTROY_MACHINES"
  ]
  dropdownSettings: any = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      itemsShowLimit: 3
    };
  }

  addUser() {
    this.userService.addUser({ 
      username: this.username,
      password: this.password, 
      firstName: this.firstName, 
      lastName: this.lastName,
      permissions: this.selectedPermissions
    })
    .subscribe(user => {
      console.log(user);
      this.message = "Successfully added user!";
    }, error => {
      this.message = "Error!";
    })
  }

}
