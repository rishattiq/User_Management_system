import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../../service/api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
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

  userservice = inject(APIService);
  router = inject(Router);

  @Output() userCreated = new EventEmitter<void>();

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
