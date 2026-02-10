import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: true
})
export class ProductDetailComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      dynamicAttributes: this.fb.array([])
    });
  }

  addDynamicAttribute() {
    const attributes = this.productForm.get('dynamicAttributes');
    attributes.push(this.fb.control(''));
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      console.log('Product Data:', productData);
      // Implement the logic to save the product details
    }
  }
}