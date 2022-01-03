import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'yuj-rx-usage',
  templateUrl: './rx-usage.component.html',
  styleUrls: ['./rx-usage.component.scss'],
})
export class RxUsageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const numbers = interval(1000);
    const takeThree = numbers.pipe(
      take(3),
      map((value) => value + '- date -' + Date.now())
    );
    takeThree.subscribe((value) => console.log(value));

    // filter operators

    let myFilter$ = of(10, 30, 40, 50, 102, 33, 34);

    myFilter$.pipe(filter((val) => val <= 50)).subscribe((result) => {
      console.log(result);
    });

    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap((x) =>
        interval(1000).pipe(
          take(5),
          map((i) => x + i)
        )
      )
    );
    result.subscribe((x) => console.log(x));
  }

  rxJsOperators() {
    const obs = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.complete();
    });

    of(1, 2, 3, 4, 5).pipe(map((v) => v + 5));
  }
}
