import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  message: string;

  userToUpdate;

  constructor(
    private usersService:UsersService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.route.queryParams.subscribe(data=>{
      this.userToUpdate=data;
      console.log(this.userToUpdate);
   });
  }

  updateUser(form:NgForm){
    this.usersService.updateData(form.value).subscribe(response=>{
       console.log(response);
       if(response.error===false){
       form.reset();
      //  this.router.navigateByUrl('/customers');
       }
    })
  }

  ngOnInit() {
  }

}
