import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) {}

  onLogin(loginObj: any) {
    return this.http.post("https://jsonplaceholder.typicode.com/users", loginObj);
  }

  get_userList(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  createUser(obj:any){
    return this.http.post("https://jsonplaceholder.typicode.com/users", obj);
  }

  delete_user(userid:any){

    return this.http.get("https://jsonplaceholder.typicode.com/users?id=" + userid)
  

  }

  // edit_user(userid:any){

  //   return this.http.get("https://jsonplaceholder.typicode.com/users?id=" + userid)
  

  // }
}
