import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productConfigs!: any;
  constructor() {}

  ngOnInit(): void {}
}
