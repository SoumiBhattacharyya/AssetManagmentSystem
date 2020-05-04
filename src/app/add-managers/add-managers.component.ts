import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-add-managers',
  templateUrl: './add-managers.component.html',
  styleUrls: ['./add-managers.component.css']
})
export class AddManagersComponent implements OnInit {

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

  // postUser(form:NgForm){
  //   console.log(form);
  // }


}
