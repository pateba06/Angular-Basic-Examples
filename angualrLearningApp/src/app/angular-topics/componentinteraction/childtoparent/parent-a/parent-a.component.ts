import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.css']
})
export class ParentAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  childData:string;
  parentMethod(data){
    this.childData =data; 
  }

}
