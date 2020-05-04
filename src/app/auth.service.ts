import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  myURL = 'http://localhost:8081/api';

  constructor(private http:HttpClient,private router:Router) { }

  // register(userDetails){
  //   return this.http.post<any>(`${this.myURL}/register-customers`,userDetails);
  // }

  login(users){
    return this.http.post<any>(`${this.myURL}/login`,users);
  }

  isManager():boolean{
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.role === 'ROLE_MANAGER'){
      return true;
    }else{
      return false;
    }
  }

  isAdmin():boolean{
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.role === 'ROLE_ADMIN'){
      return true;
    }else{
      return false;
    }
  }

  isLogged():boolean{
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
