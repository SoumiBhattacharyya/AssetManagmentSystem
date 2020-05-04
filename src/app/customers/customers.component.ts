import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { Router } from '@angular/router';

export interface User{
  userId:number;
  fullName:string;
  email:string;
  mobile:number;
  address:string;
  role:string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  message:string;
  users:User[];

  constructor(
    private usersService:UsersService,
    private router:Router
  ) { 
    this.getCustomerData();
  }
  ngOnInit() {
  }

  getCustomerData(){
    this.usersService.getCustomerData().subscribe(response=>{
      console.log(response);
      this.users=response.data;
    });
  }

  deleteUsers(user){
    this.usersService.deleteData(user).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getCustomerData();
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



}
