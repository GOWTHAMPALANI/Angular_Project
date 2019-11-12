import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  serviceproperty = "Service Created";

  constructor(private http:HttpClient) { }
  getusers(){
    return this.http.get('https://reqres.in/api/users')
  }
  getusers1(){
    return this.http.get("http://jsonplaceholder.typicode.com/users")
  }
  alert(){
    //console.log("service working");
    alert('data Service Working ');

  }
  showtodayDate(){
    let ndate = new Date();
    return ndate;
  }
}
