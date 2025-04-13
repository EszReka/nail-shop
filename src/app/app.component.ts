import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgIf } from '@angular/common';
import { UserObject } from './pages/profile/model/user-object';
import { ProductComponent } from "./pages/product/product.component";
import { CartComponent } from "./pages/cart/cart.component";
import { UserService } from './pages/profile/user.service';

@Component({
  selector: 'app-root',
  imports: [
     HomeComponent,
     ProfileComponent,
     MenuComponent,
     NgIf,
     ProductComponent,
     CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nail-shop';
  page = "home";
  currentUser: UserObject | null = null;

  constructor(private userService: UserService) {}

  changePage(page: string){
    if(page == 'logout'){
      this.userService.logout();
      this.page = 'home';
    } else {
       this.page = page;
    }
   }

   ngOnInit() {
    this.userService.currentUser$.subscribe((user: UserObject | null) => {
      this.currentUser = user;
    });    
  }
}
