import { ProductComponent } from './product/product.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/Products';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  submit(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product)
  }

  delete(product: Product): Observable<void> {
    return this.http.delete<void>(`${this.url}/${product.id}`)
  }
}
