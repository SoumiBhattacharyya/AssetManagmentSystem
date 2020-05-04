import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  myURL = 'http://localhost:8081/api';

  constructor(private http:HttpClient) {}

  

    postData(assets){
      
      return this.http.post<any>(`${this.myURL}/add-assets`,assets);
    }

    getData(){
      
      return this.http.get<any>(`${this.myURL}/get-assets`);  
    }

    deleteData(assets){
     
      return this.http.delete<any>(`${this.myURL}/delete-assets/${assets.assetId}`);
     
    }

    updateData(assets){
     
      return this.http.put<any>(`${this.myURL}/edit-assets`,assets);
    }
}
