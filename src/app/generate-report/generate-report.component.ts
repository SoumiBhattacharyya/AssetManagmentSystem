import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

export interface Request{
  requestId:number;
  userId:number;
  assetId:number;
  employeeId:number;
  assetName:string;
  assetPrice:number;
  assetQuantity:number;
  alcUnlc:string;
  reason:string;
  status:string;
  totalPrice:number;
}

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  requestToUpdate;
  requests:Request[];

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
       this.router.navigateByUrl('/assets');
       }
    })
  }

  ngOnInit() {
  }

}
