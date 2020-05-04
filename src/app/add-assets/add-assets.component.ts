import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.css']
})
export class AddAssetsComponent implements OnInit {

  message: string;

  constructor(private assetService:AssetService) { }

  ngOnInit() {
  } 

  postAsset(form:NgForm){
    
    this.assetService.postData(form.value).subscribe(response =>{
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
