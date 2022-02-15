import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  message: string = ""

  id: number = -1
  username: string = ""
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

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      itemsShowLimit: 3
    };
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      this.username = params.username;
      this.firstName = params.firstName;
      this.lastName = params.lastName;
      this.selectedPermissions = params.permissionNames;
    });

  }

  editUser() {
    this.userService.editUser({ 
      id: this.id,
      username: this.username,
      firstName: this.firstName, 
      lastName: this.lastName,
      permissions: this.selectedPermissions
    })
    .subscribe(user => {
      this.message = "Successfully edited user!";
    }, error => {
      this.message = "Error!";
    })
  }

}
