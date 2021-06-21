import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { SharedServicesService } from 'src/app/services/shared-services.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor(private sharedService:SharedServicesService) {}

  @ViewChild('addBtn') addBtn: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    /*
     *fromEvent takes two arguments. target name and event name
     *Whenever we are using View Child - where we have to access DOM elements
     *then we do not use in ngOnInit but we will use ngAfterViewInit
     *because we want our button to rendered and then we want to run below code
     */
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      // incrementing video count
      let countval = 'Employee' + count++;

      // triggering elAppend() function and passing countval as parameter to increment and elcontainer
      this.sharedService.elAppend(countval, 'elContainer')
      this.sharedService.elAppend(countval, 'elContainer2')
      // this.elAppend(countval, 'elContainer');
      // this.elAppend(countval, 'elContainer2');
    });
  }

  /**********I have moved this method in service..I have left it here so to understand
  
  *Create a method for append li item
  *val parameter --to get value in increment
  *containerId in parameter-- as we want to use as dynamic and multiple places
  */
  /**  elAppend(val, containerId){
    // Crating li element
    let el = document.createElement('li');
    // assigning inner text to el element
    el.innerText = val
    // appending li element in ul
    document.getElementById(containerId).appendChild(el)}*/
}
