import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Data } from '@angular/router';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Creating the Object';
  //title1 = 'Tour of Heroes';
  months = ["January", "February", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable = true;
  httpdata;
  users:object;
  constructor(private data:DataService){
  }
  ngOninit(){
   this.data.getusers1().subscribe(data => this.users);
  console.log(this.data.getusers1());
  }
  
  first1(){
    console.log(this.users);
  }

  myclickfunction(event){
    // alert('button clicked');
    this.isavailable = false;

    // console.log(event);
  }
  changemonths(event) {
    alert("Changed month from the Dropdown");
    console.log(event);
 }
}