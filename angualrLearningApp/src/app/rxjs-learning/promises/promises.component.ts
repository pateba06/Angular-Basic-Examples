import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css'],
})
export class PromisesComponent implements OnInit {
  constructor() {}

  // Example 2

  dellAvailable(){
    // using setTimeout --if person is going out to buy laptop its gonna take time.
    // Promise take times to resolve it so let use setTimeout
    return setTimeout(()=>{
      return false
    },3000)
  }

  hpAvailable(){
    return setTimeout(()=>{
      return false
    },3000)
  }

  dell={
    brand:'dell',
    hardDisk: '2 Tb',
    color:'black'
  }

  hp={
    brand:'hp',
    hardDisk: '10 Tb',
    color:'grey'
  }

  notAvailableBrand ={
    brand :'not available',
    status : 'failed'
  }

  promiseVal;
  ngOnInit(){
    let buyLaptop = new Promise((resolve,reject)=>{
      if(this.dellAvailable()){
        resolve (this.dell)
      } else if (this.hpAvailable()){
        resolve (this.dell)
      } else {
        reject (this.dell)
      }
    });


    buyLaptop.then(res=>{
      console.log('then code =>', res)
      this.promiseVal =res;
    }).catch(res=>{
      console.log('catch code =>', res)
      this.promiseVal = res; 
    })
    
  }

  // Example 1 - changing ngOnit for example 2
      // ngOnInit(): void {
      //   // // promoise  can have either resolve or reject
      //   // // let buyLaptop = new Promise(function(resolve,reject) {
      //   // //   resolve('Promise is Resolved')
      //   // // });
      //   // // Writing same method using fat arrow function of ES6

      //   // let buyLaptop = new Promise((resolve, reject) => {
      //   //   resolve('Promise is Resolved');
      //   //   // reject('Promise is reject')
      //   // });

      //   // buyLaptop.then(res => {
      //   //   // alert('sucess');
      //   // console.log ('then code =>', res);
      //   // }).catch(res => {
      //   //   console.log ('then code =>',res)
      //   // });
      // }




}
