import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { APIService } from '../../service/api.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj : any = {

    email: "",
    username: ""

  }

  userservice = inject(APIService)
  router = inject(Router)

  login(){
    this.userservice.onLogin(this.loginObj).subscribe((res:any)=>{
      
        localStorage.setItem('userApp',JSON.stringify(res));
        if(res.username=="Bert"){
        this.router.navigateByUrl("/createUser")
        alert("Login successfully")
        }
        else{
          this.router.navigateByUrl("/Userlist")
          alert("Not Login successfully")
        }
     
      
      
      
    });
  }
}
