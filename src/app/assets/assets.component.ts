import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AssetService } from '../asset.service';
import { RequestService } from '../request.service';


export interface Asset{
  assetId:number;
  assetName:string;
  assetQuantity:number;
  assetPrice:number;
  assetImageUrl:string;
  assetDescription:string;
}

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})

export class AssetsComponent implements OnInit {
  
  searchValue:string;

  message:string;
  assets:Asset[];
 

  constructor(
    private assetService:AssetService,
    private router:Router 
  ){ 
    this.getAssets();
   }

   getAssets(){

     this.assetService.getData().subscribe(response=>{
       console.log(response);
       this.assets=response.data;
     });
   }

   deleteAssets(asset){
     this.assetService.deleteData(asset).subscribe(response=>{
       console.log(response);
       if(response.error===false){
         this.getAssets();
         this.message=response.message;
         setTimeout(()=>{
           this.message=null;
         },5000);
       }
      
     });
   }

//    this.assetService.postData(form.value).subscribe(response =>{
//     console.log(response);
//     if(response.error===false){
//       this.message=response.message;
//       setTimeout(()=>{
//         this.message = null;
//       },5000);
//     }
//     form.reset();
   
//   });
// }

   selectAssets(asset){
     this.router.navigate(['/edit-assets'],{queryParams:asset});
   }

   raiseRequest(asset){
     this.router.navigate(['/raise-request'],{queryParams:asset});
   }

  ngOnInit() {
  }

}
