import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  myURL = 'http://localhost:8081/api';

  constructor(private http:HttpClient) {}

  postData(users){ 
    return this.http.post<any>(`${this.myURL}/add-users`,users);
  }

  getOneUser(){
    let userData = JSON.parse(localStorage.getItem('userData'));
      let email = userData.email;
      return this.http.get<any>(`${this.myURL}/users/get/${email}`);
  }

  getData(){
    
    return this.http.get<any>(`${this.myURL}/get-users`);  
  }

  deleteData(users){
   
    return this.http.delete<any>(`${this.myURL}/delete-user/${users.userId}`);
  }

  updateData(users){
    
    return this.http.put<any>(`${this.myURL}/edit-users`,users);
  }

  getCustomerData(){
    return this.http.get<any>(`${this.myURL}/get-customers/CUSTOMER`);
  }





}
