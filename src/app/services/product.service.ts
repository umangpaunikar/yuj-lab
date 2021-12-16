import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'assets/data/product.json';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.baseUrl);
  }
}
