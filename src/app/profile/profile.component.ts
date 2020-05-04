import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { Router } from '@angular/router';

export interface User{
  userImage:string;
  userId:number;
  fullName:string;
  email:string;
  mobile:number;
  address:string;
  role:string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  message:string;
  users:User[];

  constructor(
    private usersService:UsersService,
    private router:Router
  ) { 
    this.getSingleUser();
  }

  getSingleUser(){
    this.usersService.getOneUser().subscribe(response=>{
      console.log(response);
      this.users=response.users;
    });
  }

  
  ngOnInit() {
  }

}
