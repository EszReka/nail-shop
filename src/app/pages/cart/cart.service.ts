import { Injectable } from '@angular/core';
import { ProductItemComponent } from '../product/model/product-item/product-item.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: ProductItemComponent[] = [];

  constructor() {}

  addToCart(item: ProductItemComponent) {
    this.cart.push(item);
  }

  getCartItems() {
    return [...this.cart];
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
