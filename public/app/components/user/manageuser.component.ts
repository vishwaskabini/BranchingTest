import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'manageuser',
  templateUrl: `./app/components/user/manageuser.component.html`
})

export class ManageUserComponent {
  userList: any = [];
  info = '';
  selectedUser: any = "";
  public rowsOnPage = 5;
  public sortBy = "id";
  public sortOrder = "asc";

  constructor(private userservice: UserService) {
    this.getUsersList();
  }

  @ViewChild('modal') public modal: any;

  public showModal(userID): void {
    this.selectedUser = userID;
    this.modal.show();
  }

  public hideModal(): void {
    this.modal.hide();
  }

  getUsersList() {
    this.userservice.getusers().subscribe((result) => {
      if (result) {
        this.userList = result;
      }
    });
  }
  
  getDate(time) {
    return new Date(time).toLocaleDateString();
  }
}

