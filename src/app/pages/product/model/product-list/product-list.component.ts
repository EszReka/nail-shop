import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductItemComponent,
    CommonModule,
    ScrollingModule,
    MatIconModule,
    MatBadgeModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products: { 
    product_name: string;
    price: number;
    details: string;
    picture: string;
    itemCount: number;
  }[] =  [
    {
      product_name: 'Nail Polish - Red',
      price: 1499,
      details: 'Vibrant red long-lasting nail polish.',
      picture: 'images/nail-purple.jpg',
      itemCount : 3,
    },
    {
      product_name: 'Nail File Set',
      price: 899,
      details: 'Set of 3 premium nail files.',
      picture: 'images/nail-file-set.jpg',
      itemCount : 2,
    },
    {
      product_name: 'UV Lamp',
      price: 10499,
      details: 'Professional LED/UV nail curing lamp.',
      picture: 'images/uv-lamp.jpg',
      itemCount: 0,
    }
  ];

  addToCart(product:ProductItemComponent){
    product.itemCount++;
  }
}
