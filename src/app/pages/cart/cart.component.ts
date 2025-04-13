import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product/model/product-item/product-item.component';
import { PriceFormatPipe } from '../../pipes/price-format.pipe';

@Component({
  selector: 'app-cart',
  imports: [ MatCard,
    MatCardContent,
    CommonModule,
    PriceFormatPipe
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  cartItems: ProductItemComponent[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotal();
  }

  changeQuantity(item: ProductItemComponent, delta: number): void {
    item.itemCount = Math.max(1, item.itemCount + delta);
    this.updateTotal();
  }
  
  updateTotal(): void {
    this.total = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.itemCount, 0
    );
  }
}
