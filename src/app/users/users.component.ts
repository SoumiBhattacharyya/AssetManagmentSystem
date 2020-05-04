import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../user.service';

export interface User{
  userId:number;
  fullName:string;
  email:string;
  mobile:number;
  address:string;
  role:string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // searchValue:string;

  message:string;
  users:User[];

  constructor(
    private usersService:UsersService,
    private router:Router
  ) { 
    this.getUsers();
  }

  getUsers(){
    this.usersService.getData().subscribe(response=>{
      console.log(response);
      this.users=response.data;
    });
  }

  deleteUsers(user){
    this.usersService.deleteData(user).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getUsers();
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000);
      }
     
    });
  }

  selectUsers(user){
    this.router.navigate(['/edit-users'],{queryParams:user});
  }


  ngOnInit() {
  }


}
