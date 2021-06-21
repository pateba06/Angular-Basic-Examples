import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyncandawait',
  templateUrl: './asyncandawait.component.html',
  styleUrls: ['./asyncandawait.component.css'],
})
export class AsyncandawaitComponent implements OnInit {
  constructor() {}

  /*  ---commented to see 3 examples of promis , asynch, await
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data Recieved');
    }, 3000);
  });

  // async keywoard with function will always return promise
  // await waits promise to solve or until it settles
  async getData() {
    let response = await this.promise;
    console.log(response)
  }

  ngOnInit(): void {
    // console.log(this.getData());
    this.getData()
  }
*/

  ngOnInit() {}
  // Example 1 ---With Promise
  result1: string = 'data';

  dell = {
    brand: 'dell',
    hardDisk: '2 TB',
    color: 'black',
  };
  buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell);
    }, 3000);
  });
  fetch1() {
    this.result1 = 'Fetching Data';
    this.buyLaptop.then((res) => {
      console.log(res);
      this.result1 = JSON.stringify(res);
    });
  }

  // Example 2 ---With Async /await

  result2: string = 'data';
  dell2 = {
    brand: 'dell 2',
    hardDisk: '5',
    color: 'grey',
  };
  buyLaptop2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell2);
    }, 10000);
  });

  async fetch2() {
    this.result2 = 'Fetching Data';
    let data = await this.buyLaptop2;
    // console.log(data)
    this.result2 = JSON.stringify(data);
  }

  // Example 3 ---Fetch With API
  buylaptop3 = fetch('https://jsonplaceholder.typicode.com/posts').then(
    (response) => response.json()
  );
  result3Promise: string = 'data';
  fetch3promise() {
    this.result3Promise = 'Fetching Data';
    // Promise
    this.buylaptop3.then((res) => {
      this.result3Promise = JSON.stringify(res);
      console.log('Using Promise' + this.result3Promise)
    });
  }
  // async/await
  result3asyncawait:string ='data'
  async fetch3asyncawait() {
    this.result3asyncawait ='Fetching Data';
    let res =await this.buylaptop3;
    this.result3asyncawait = JSON.stringify(res)
    console.log('using async await' + this.result3asyncawait)
    
  }
}
