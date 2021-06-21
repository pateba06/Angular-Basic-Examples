import { Component, OnInit } from '@angular/core';
import { from, of, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array-rxjs-operator',
  templateUrl: './to-array-rxjs-operator.component.html',
  styleUrls: ['./to-array-rxjs-operator.component.css'],
})
export class ToArrayRxjsOperatorComponent implements OnInit {
  constructor() {}

  subscription: Subscription;
  users = [
    { name: 'Sachin Tendulkar', skill: 'Cricket' },
    { name: 'Amitab Bachan', skill: 'Acting' },
    { name: 'Abdul kalam', skill: 'Scientist' },
    { name: 'Manmohan Singh', skill: 'Economics and Polician' },
    { name: 'Narendra Modi', skill: 'Politician' },
  ];

  ngOnInit(): void {
    /***********************************************************************************************************************************************
     * Example 1 --- toArray -- to convert into array
     *********************************************************************************************************************************************/
    const source = interval(1000);
    this.subscription = source
      .pipe(
        // operator chain. using multiple operator. take(5) we are defining the array should take max 5
        take(5),
        // toArray() -- rxjs operator converting into array
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
      });

    /***********************************************************************************************************************************************
     * Example 2 --- toArray -- to convert into array
     *********************************************************************************************************************************************/
    // emiting users one by one
    const source2 = from(this.users);
    // converting source2 into single array again
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    /***********************************************************************************************************************************************
     * Example 3 --- toArray -- to convert into array
     *********************************************************************************************************************************************/
    // emiting users one by one
    const source3 = of(
      'Mohammad Ali',
      'Michael Jordon',
      'Sachin Tendulkar',
      'MS Dhoni'
    );
    console.log('source 3', source3);
    // converting source3 into single array again
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
