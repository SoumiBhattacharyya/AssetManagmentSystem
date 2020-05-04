import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string; 

  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  loginUser(form:NgForm){
    this.authService.login(form.value).subscribe(response=>{
        console.log(response);
      if(response.error){
        this.message=response.message; 
        setTimeout(()=>{
          this.message=null;
        },5000);
      }else{
        localStorage.setItem('userData',JSON.stringify(response));
        if(response.role==='ROLE_ADMIN'){
        this.router.navigateByUrl('/my-assets');
      } else if (response.role==='ROLE_MANAGER'){
        this.router.navigateByUrl('/home');
      }
    }
      });
    }
  }

