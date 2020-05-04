import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message : string;

  constructor(private usersService:UsersService) { }

  ngOnInit() {
  }


  postUser(form:NgForm){
    this.usersService.postData(form.value).subscribe(response =>{
      console.log(response);
      if(response.error===false){
        this.message=response.message;
        setTimeout(()=>{
          this.message = null;
        },5000);
      }
      form.reset();
     
    });
  }

}
