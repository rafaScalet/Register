import { Component } from '@angular/core';
import { Product } from '../Product';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product[] = []
  catchFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.catchFormGroup = formBuilder.group({
      ID: [''],
      Name: [''],
      Description: [''],
      Price: [''],
      Quantity: [''],
    });
  }

  submit() {
    this.product.push(this.catchFormGroup.value);
  }
}
