import { Component } from '@angular/core';
import { ProductListComponent } from './model/product-list/product-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-product',
  imports: [
    ProductListComponent,
    ScrollingModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
