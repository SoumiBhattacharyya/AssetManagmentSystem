import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validate-requests',
  templateUrl: './validate-requests.component.html',
  styleUrls: ['./validate-requests.component.css']
})
export class ValidateRequestsComponent implements OnInit {

  message: string;

  requestToUpdate;


  constructor(
    private requestService:RequestService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.route.queryParams.subscribe(data=>{
      this.requestToUpdate=data;
      console.log(this.requestToUpdate); 
    });
   }

   updateRequest(form:NgForm){
    this.requestService.updateData(form.value).subscribe(response=>{
       console.log(response);
       if(response.error===false){
       form.reset();
       this.router.navigateByUrl('/all-requests');
       }
    })
  }

  ngOnInit() {
  }

}
