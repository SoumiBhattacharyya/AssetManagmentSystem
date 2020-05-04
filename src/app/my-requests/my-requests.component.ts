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
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  message:string;
  requests:Request[];

  constructor(
    private requestService:RequestService,
    private router:Router
  ) {
    this.getRequests();

   } 

   getRequests(){
    this.requestService.getUserRequest().subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.requests=response.data;
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000); 
      }else {
        this.message=response.message;
      } 
    });
  }

  deleteRequests(request){
    this.requestService.deleteData(request).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getRequests();
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000); 
      }
     
    });
  }

  generateReport(request){
    this.router.navigate(['/generate-report'],{queryParams:request});
  }

  ngOnInit() {
  }
}
