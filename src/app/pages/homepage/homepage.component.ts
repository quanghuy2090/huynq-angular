import { RouterLink } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  products: Product[] = [];
  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => {
        console.log(e);
        alert('Error: ' + e.message);
      },
    })
  }
}
