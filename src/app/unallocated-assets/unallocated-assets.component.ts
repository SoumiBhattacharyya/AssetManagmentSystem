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
  reason:string;
  status:string;
}

@Component({
  selector: 'app-unallocated-assets',
  templateUrl: './unallocated-assets.component.html',
  styleUrls: ['./unallocated-assets.component.css']
})
export class UnallocatedAssetsComponent implements OnInit {

  message:string;
  requests:Request[];

  constructor(
    private requestService:RequestService,
    private router:Router
  ) {
    this.getUnallocatedRequests(this.requests);
   }

  ngOnInit() {
  }

  getUnallocatedRequests(request){
    this.requestService.getUnallocatedData(this.requests).subscribe(response=>{
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
