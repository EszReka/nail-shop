import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgIf } from '@angular/common';
import { UserObject } from './pages/profile/model/user-object';
import { ProductComponent } from "./pages/product/product.component";
import { CartComponent } from "./pages/cart/cart.component";
import { UserService } from './pages/profile/user.service';
import { AuthService } from './shared/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { routes } from './app.routes'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
     HomeComponent,
     ProfileComponent,
     MenuComponent,
     NgIf,
     ProductComponent,
     CartComponent,
     RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nail-shop';
  page = "home";
  currentUser: UserObject | null = null;

  constructor(private userService: UserService,
     private authService: AuthService,
    private router : Router) {}

  changePage(page: string){
    if(page == 'logout'){
      this.authService.signOut;
      this.page = 'home';
      this.router.navigate(['/home']);
    } else {
       this.page = page;
       this.router.navigate(['/'+page]);
    }
   }

   ngOnInit() {
    this.authService.currentUser.subscribe((user: UserObject | null) => {
      this.currentUser = user;
      console.log('User from AuthService:', user);
      this.router.navigate(['/home']);
    });
  }
}
