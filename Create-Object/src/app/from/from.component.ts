import { Component, OnInit } from '@angular/core';
import { Item } from '../item-list';
import { ITEMS } from '../mock-items';
import { DataService } from '../data.service';
 @Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
item: Item = {
  id:1,
  name:'Two way Binding'
};
  constructor(private dataservice:DataService) { }

  ngOnInit() {
 
  }
  sachin(){
    this.dataservice.alert();
   }
}
