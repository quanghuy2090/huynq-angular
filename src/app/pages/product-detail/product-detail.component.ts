import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  products: Product | null = null;
  productService = inject(ProductService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productService.getProductDetail(params['id']).subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (e) => {
          console.log(e);
          alert('Error: ' + e.message);
        },
      });
    });
  }
}
