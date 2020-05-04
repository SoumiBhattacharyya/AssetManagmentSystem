import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  message: string;

  assetToUpdate;

  constructor(
    private assetService:AssetService,
    private route:ActivatedRoute,
    private router:Router
  ) { 
    this.route.queryParams.subscribe(data=>{
      this.assetToUpdate=data;
      console.log(this.assetToUpdate); 
    }); 
  }

  updateAsset(form:NgForm){
    this.assetService.updateData(form.value).subscribe(response=>{
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
