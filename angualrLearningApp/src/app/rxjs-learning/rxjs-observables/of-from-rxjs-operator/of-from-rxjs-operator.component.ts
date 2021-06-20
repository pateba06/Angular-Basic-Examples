import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { SharedServicesService } from 'src/app/services/shared-services.service';

@Component({
  selector: 'app-of-from-rxjs-operator',
  templateUrl: './of-from-rxjs-operator.component.html',
  styleUrls: ['./of-from-rxjs-operator.component.css'],
})
export class OfFromRxjsOperatorComponent implements OnInit {
  constructor(private sharedService: SharedServicesService) {}

  obsMsg;

  ngOnInit(): void {
    /***********************Example 1 - Using (0f) rxjs operator*********************************************************/

    // using rxjs 'of' operator
    const obs1 = of('Patel', 'Shah', 'Parmar');
    // Subscribing to value of observable stream which we got using OF operator of rxjs
    obs1.subscribe((res) => {
      console.log(res);
      this.sharedService.elAppend(res, 'elContainer');
    });

    // this.sharedService.elAppend(val,'elContainer')

    /***********************Example  2 Using (0f) rxjs operator Getting Observable from Object*****************************/

    // using rxjs 'of' operator --In this example we will get data from object which has key and value
    const obs2 = of({ a: 'Patel', b: 'Shah', c: 'Parmar' });
    // Subscribing to value of observable stream which we got using OF operator of rxjs
    obs2.subscribe((res) => {
      this.obsMsg = res;
      console.log('obsMsg =>', res);
    });

    /***********************Example  3  Using (from) Operator of rxjs. getting data(observable) from Array*****************************/
    // (from) operaator getting observable from Array
    const obs3 = from(['USA', 'Canada', 'Australia', 'India']);
    obs3.subscribe((res) => {
      console.log(res);
      this.sharedService.elAppend(res, 'elContainer3');
    });

    /***********************Example  4  Using (from) Operator of rxjs. Using ---Promise-- getting data(observable) *****************************/
    // creating promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });

    // from operator using Promise ---promise to observable
    const obs4 = from(promise);
    obs4.subscribe((res) => {
      // printing promise resolved after 3 sec in console
      console.log('from Promise =>', res);
      // pringing prom resolved in html page
      this.sharedService.elAppend(res, 'elContainer4');
    });

        /***********************Example  4  Using (from) Operator of rxjs. Using ---String to (observable) *****************************/
        // using from operator to convert string to observable
        const obs5 = from('Welcome to United States');
        // subscribing to observable
        obs5.subscribe(res => {
          console.log('from string =>',res)
          this.sharedService.elAppend(res,'elContainer5')
        })

  }

  

}
