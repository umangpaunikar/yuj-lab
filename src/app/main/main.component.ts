import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getDetails(data: any) {
    console.log(`data from child -->  ${data} `);
  }
}
