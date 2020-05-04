import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';



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
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit {

  
  // searchValue:string;

  buttonDisabled : boolean;

  message:string;
  requests:Request[];

  constructor(
    private requestService:RequestService,
    private router:Router
  ) {
    this.getRequests();

   }

   getRequests(){
    this.requestService.getData().subscribe(response=>{
      console.log(response);
      this.requests=response.data;     
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

  validateRequests(request){
    this.requestService.validateData(request).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getRequests();
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000); 
      }else if(response.error===true){
        this.getRequests();
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000); 
      }
     
    });
  }

  approveRequests(request){
    this.requestService.approveData(request).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getRequests();
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000); 
      }else if(response.error===true){
        this.getRequests();
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000); 
      }
     
    });
  }

  rejectRequests(request){
    this.requestService.rejectData(request).subscribe(response=>{
      console.log(response);
      if(response.error===false){
        this.getRequests();
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000); 
      }else if(response.error===true){
        this.getRequests();
        this.message=response.message;
        setTimeout(()=>{
          this.message=null;
        },5000); 
      }
     
    });
  }

  // selectRequests(request){
  //   this.router.navigate(['/validate-requests'],{queryParams:request});
  // }

  ngOnInit() {
  }


}

