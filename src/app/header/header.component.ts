import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  personDetails = [
    {
      name: 'umang',
      address: 'pune',
      'age limit': '32',
    },
    {
      name: 'Foo',
      address: 'Mumbai',
      'age limit': '40',
    },
  ];
}
