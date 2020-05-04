import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  message: string;
  constructor(private usersService:UsersService) { }

  ngOnInit() {
  }

  postUser(form:NgForm){
    console.log(form.value);
    this.usersService.postData(form.value).subscribe(response =>{
      console.log(response);
      if(response.error===false){
        this.message=response.message;
        setTimeout(()=>{
          this.message = null;
        },5000);
      }else{
        this.message=response.message;
      }
      form.reset();
     
    });
  }


}
