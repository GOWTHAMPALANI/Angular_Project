import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
  h1style: boolean = false;
  componentproperty;
  todaydate = new Date();
  jsonval ={name:'GOWTHAM',age:26,address:{a1:'mumbai',a2:'karnataka'}};
  users:object;
  emailid;
   formdata;
  Carlist:any[] = [
    { 
      price:10000, 
      car_name: "BMW",
      quantiy: 12,
      description:"this is bmw car"
    },
    { 
      price: 20000,
      car_name: "audi",
      quantiy: 15 
    },
    { 
      price: 300000,
      car_name: "maruti",
      quantiy: 18
    },
    {
      price: 4000, 
      car_name: "benz",
      quantiy:20,
      description:"this is benz car"
    },
    {
      price: 50000, 
      car_name: "renauld",
      quantiy:10
    },   
  ];
  Email: any;
  constructor(private data:DataService) { 
      
    }
 
  
  ngOnInit() {
    this.data.getusers().subscribe(data=>{
      this.users = data;
      this.todaydate = this.data.showtodayDate();
console.log(this.data.serviceproperty);
this.data.serviceproperty = "Test component Created";
this.componentproperty = this.data.serviceproperty;
    }
 
    );
}

first(){
  console.log(this.users);
}
totalPrice(){ //total price carList Object

    let totalamount = 0;
    for(let i = 0; i<this.Carlist.length;i++)
    totalamount = totalamount + this.Carlist[i].price;
    console.log("Totalamount:" +totalamount);
    console.log("AmountAverage:"+totalamount/this.Carlist.length);
    //document.getElementById("demo").innerHTML = totalamount;

}
totalQuantity(){ //totalQuantity carList Object

      let totalquantity = 0;
      for(let i = 0; i<this.Carlist.length;i++)
    totalquantity = totalquantity + this.Carlist[i].quantiy;
      console.log("TotalQuantity:"+ totalquantity);
      console.log("QuantityAverage:"+totalquantity/this.Carlist.length);

    // document.getElementById("demo").innerHTML = totalquantity;
  }
length(){ //length of carList Object

  console.log("Arraylenth:"+ this.Carlist.length)
  //document.getElementById("demo").innerHTML = this.Carlist.length;
return this.Carlist.length;
}

maximum(){ //maximum value of quantity
  let max = 0;
  for(let i=0; i<this.Carlist.length;i++)
  {
    if(this.Carlist[i].quantiy > max){
      max = this.Carlist[i].quantiy;
    }

}
return max;
console.log("maximum value in Quantity:"+ max);
}


minimum(){ //minimum value of quantity
  let min = 100;
  for(let i=0; i<this.Carlist.length;i++)
  {
    if(this.Carlist[i].quantiy < min){
      min = this.Carlist[i].quantiy;
    }

}
console.log("Minimum value in Quantity:"+ min);
}
onClickSubmit(data){
  console.log("entered the Email id" + data.emailid);
}
}