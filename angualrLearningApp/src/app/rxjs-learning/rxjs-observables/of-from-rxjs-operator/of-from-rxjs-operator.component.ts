import { Component, OnInit } from '@angular/core';
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
    /***********************Example 1 *********************************************************/

    // using rxjs 'of' operator
    const obs1 = of('Patel', 'Shah', 'Parmar');
    // Subscribing to value of observable stream which we got using OF operator of rxjs
    obs1.subscribe((res) => {
      console.log(res);
      this.sharedService.elAppend(res, 'elContainer');
    });

    // this.sharedService.elAppend(val,'elContainer')

    /***********************Example  2 Getting Observable from Object*****************************/

    // using rxjs 'of' operator --In this example we will get data from object which has key and value
    const obs2 = of({ a: 'Patel', b: 'Shah', c: 'Parmar' });
    // Subscribing to value of observable stream which we got using OF operator of rxjs
    obs2.subscribe((res) => {
      this.obsMsg = res ;
      console.log('obsMsg =>', res);
      // this.sharedService.elAppend(res, 'elContainer');
    });

    // this.sharedService.elAppend(val,'elContainer')
  }
}
