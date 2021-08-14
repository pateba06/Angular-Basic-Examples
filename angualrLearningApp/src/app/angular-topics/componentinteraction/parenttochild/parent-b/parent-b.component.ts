import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-b',
  templateUrl: './parent-b.component.html',
  styleUrls: ['./parent-b.component.css']
})
export class ParentBComponent implements OnInit {
  message :any;
  constructor() { }

  ngOnInit() {
  }

  sendMesageToChild(data){
    this.message = data.value;
    console.log(this.message)
  }

}
