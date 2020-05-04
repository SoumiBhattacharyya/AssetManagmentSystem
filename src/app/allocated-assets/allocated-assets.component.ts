import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

export interface Request{
  requestId:number;
  userId:number;
  assetId:number;
  employeeId:number;
  assetName:string;
  assetQuantity:number;
  alcUnlc:string;
  totalPrice:number;
  reason:string;
  status:string;
}

@Component({
  selector: 'app-allocated-assets',
  templateUrl: './allocated-assets.component.html',
  styleUrls: ['./allocated-assets.component.css']
})
export class AllocatedAssetsComponent implements OnInit {

  message:string;
  requests:Request[];

  constructor(
    private requestService:RequestService,
    private router:Router
  ) {
    this.getAllocatedRequests(this.requests);
   }

  ngOnInit() {
  }

  getAllocatedRequests(request){
    this.requestService.getAllocatedData(this.requests).subscribe(response=>{
      console.log(response);
      this.requests=response.data;
      if(response.error===false){
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000); 
      }else{
        this.message=response.message;
      }
     
    });
  }

}

