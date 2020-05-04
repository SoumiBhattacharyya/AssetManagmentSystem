import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  myURL = 'http://localhost:8081/api';

  

  constructor(private http:HttpClient) {}

  

    postData(requests){
    
      return this.http.post<any>(`${this.myURL}/add-requests`,requests);
    }

    getRequest(){
      let request = JSON.parse(localStorage.getItem('request'));
      let requestId=request.requestId;
      console.log(requestId);
      return this.http.get<any>(`${this.myURL}/requests/${requestId}`);
    }
 
    getData(){
      
      return this.http.get<any>(`${this.myURL}/get-requests`);  
    }

    getUserRequest(){
      let userData = JSON.parse(localStorage.getItem('userData'));
      let userId = userData.userId;
      console.log(userId);
      return this.http.get<any>(`${this.myURL}/get/user-requests/${userId}`);
    }

    validateData(requests){
      return this.http.get<any>(`${this.myURL}/requests/validate/${requests.requestId}`);
    }

    approveData(requests){
      return this.http.get<any>(`${this.myURL}/request-approval/${requests.requestId}`);
    }

    rejectData(requests){
      return this.http.get<any>(`${this.myURL}/request-rejection/${requests.requestId}`)
    }

    deleteData(requests){
      
      return this.http.delete<any>(`${this.myURL}/requests/${requests.requestId}`);
    }

    updateData(requests){
      
      return this.http.put<any>(`${this.myURL}/edit-requests`,requests);
    }

    getAllocatedData(requests){
      
      return this.http.get<any>(`${this.myURL}/requests/get/allocated`);
    }

    getUnallocatedData(requests){
     
      return this.http.get<any>(`${this.myURL}/requests/get/unlc/Un-Allocated`);
    }
}
