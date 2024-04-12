import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  product: Product[] = []
  catchFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProductService) {
    this.catchFormGroup = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });
  }

  loadProduct(){
    this.service.getProduct().subscribe({
      next: data => this.product = data
    });
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  submit() {
    this.service.submit(this.catchFormGroup.value).subscribe({
      next: data => {
        this.product.push(data);
        this.catchFormGroup.reset();
      }
    })
  }

  delete(product: Product){
    this.service.delete(product).subscribe({
      next: () => this.loadProduct()
    })
  }
}
