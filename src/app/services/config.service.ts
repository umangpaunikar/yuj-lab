import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  baseUrl = 'assets/data/config.json';
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.baseUrl);
  }
}
