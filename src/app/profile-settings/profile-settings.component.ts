import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
}) 
export class ProfileSettingsComponent implements OnInit {
  message: string;

  userToUpdate;

  constructor(
    private usersService:UsersService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.route.queryParams.subscribe(response=>{
      this.userToUpdate=response;
       console.log(this.userToUpdate);
   });
  }
   
 

  updateUser(form:NgForm){
    this.usersService.updateData(form.value).subscribe(response=>{
       console.log(response);
       if(response.error===false){
        //  this.message=response.message;
       form.reset();
       this.router.navigateByUrl('/profile');
       }
    })
  }

  ngOnInit() {
  }


}
