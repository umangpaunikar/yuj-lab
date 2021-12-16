import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'yuj-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productCategories: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productCategories = this.productService.getProducts();

    this.productService.getProducts().subscribe((data) => {
      this.productCategories = data;
      console.log(data);
    });
  }
}
