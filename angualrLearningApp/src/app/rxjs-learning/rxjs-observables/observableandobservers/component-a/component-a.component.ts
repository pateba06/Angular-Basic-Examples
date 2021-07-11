import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableExampleServiceService } from '../observable-example-service.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  @ViewChild('textValue') inputName;

  constructor(private messageService: ObservableExampleServiceService) { }

  ngOnInit() {
  }


  sendMessage(value:string) {
    // send message to subscribers via observable subject
    this.messageService.sendMesasage(value);
    this.handleClear();

  } 
  handleClear(){
    // clearing the value
    this.inputName.nativeElement.value = '';

  }
  clearMessage(){
  //clear message
  this.messageService.clearMessage(); 
  }

}
