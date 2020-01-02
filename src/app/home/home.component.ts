import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x="Akshita";
  constructor() { }

  ngOnInit() {
    this.x=this.x+" W";
  }
  fmclick(){
    this.x=this.x+" W";
  }

}
