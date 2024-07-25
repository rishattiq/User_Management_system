import { Component, inject, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../../service/api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'] // Note: use 'styleUrls' instead of 'styleUrl'
})
export class CreateUserComponent implements OnInit {
  userObj: any = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  };

  loggeduserId: number = 0;
  userservice = inject(APIService);
  router = inject(Router);

  @Output() userCreated = new EventEmitter<void>();

  // ngOnInit(): void {
  //   const logged_user = localStorage.getItem('userApp');
  //   if (logged_user) {
  //     const parse_data = JSON.parse(logged_user);
  //     this.loggeduserId = parse_data.userid;
  //     this.getuserbyID();
  //   }
  // }

  ngOnInit(): void {
      
  }
  getuserbyID() {
    this.userservice.getuserbyID(this.loggeduserId).subscribe((data: any) => {
      this.userObj = data;
    });
  }

  postUser() {
    this.userservice.createUser(this.userObj).subscribe((data: any) => {
      if (data) {
        alert("Created successfully");
        this.userCreated.emit(); // Emit event after user is created
      } else {
        alert(data.message);
      }
    });
  }
}
