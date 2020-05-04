import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-raise-request',
  templateUrl: './raise-request.component.html',
  styleUrls: ['./raise-request.component.css']
})
export class RaiseRequestComponent implements OnInit {

  message: string;

  raiseRequest;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private requestService:RequestService
    ) { 
      this.route.queryParams.subscribe(data=>{
        this.raiseRequest=data;
        console.log(this.raiseRequest); 
      }); 
    }

  ngOnInit() {
  }

  postRequest(form:NgForm){
    this.requestService.postData(form.value).subscribe(response =>{
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
