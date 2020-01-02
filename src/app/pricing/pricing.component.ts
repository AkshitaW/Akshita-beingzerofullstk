import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  users={};
  count=0;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(names=>{
         this.users['arr']=names;
         alert(this.users.arr.length);
         this.count=this.users.arr.length;
    })
  }

}
