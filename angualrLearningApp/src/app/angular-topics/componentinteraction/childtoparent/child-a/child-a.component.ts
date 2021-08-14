import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
   /** 
    * To communicate from child to parent we can do using event. EventEmitter is use so event is then send to paretn. EventEmitter is Angular class.
    * 
   */
  @Output () messageFromChild: EventEmitter <string> = new EventEmitter <string> ();

  constructor() { }

  ngOnInit() {
  }

  ChildToParentComunication(){
    this.messageFromChild.emit("This message is coming from Child Component");
  }

}
