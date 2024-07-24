import { Component, inject } from '@angular/core';
import { APIService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  userservice = inject(APIService);
  userlist: any[] = [];

  constructor() {}

  ngOnInit() {
    this.userList();
  }

  userList() {
    this.userservice.get_userList().subscribe((data: any) => {
      this.userlist = data;
    });
  }

  onDelete(userid: any) {
    const isdel = confirm("Are you sure you want to delete it?");
    if (isdel) {
      this.userservice.delete_user(userid).subscribe((data: any) => {
        alert("Deleted successfully");
        this.userList(); // Refresh user list after deletion
      });
    } else {
      alert("Deletion canceled");
    }
  }

  // onEdit(userid: any) {
  //   const isdel = confirm("Are you sure you want to edit it?");
  //   if (isdel) {
  //     this.userservice.delete_user(userid).subscribe((data: any) => {
  //       alert("Deleted successfully");
  //       this.userList(); // Refresh user list after edit
  //     });
  //   } else {
  //     alert("Edition canceled");
  //   }
  // }
}
