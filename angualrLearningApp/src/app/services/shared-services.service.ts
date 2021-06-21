import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

constructor() { }

  
  /*Create a method for append li item
  *val parameter --to get value in increment
  *containerId in parameter-- as we want to use as dynamic and multiple places
  */
   elAppend(val, containerId){
    // Crating li element
    let el = document.createElement('li');
    // assigning inner text to el element
    el.innerText = val
    // appending li element in ul
    document.getElementById(containerId).appendChild(el)}
}
