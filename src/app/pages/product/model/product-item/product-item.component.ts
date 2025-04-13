import {Component, Input, Output, EventEmitter} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../cart/cart.service';
import { PriceFormatPipe } from '../../../../pipes/price-format.pipe';


@Component({
  selector: 'app-product-item',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSelectModule,
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    PriceFormatPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product_name: string = '';
  @Input() price: number = 0;
  @Input() details: string = '';
  @Input() picture: string = '';
  @Input() itemCount : number = 0;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.itemCount++;
    this.cartService.addToCart(this);
  }
}
