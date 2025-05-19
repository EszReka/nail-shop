import { Component } from '@angular/core';
import { MenuComponent } from './shared/menu/menu.component';
import { UserObject } from './pages/profile/model/user-object';
import { UserService } from './pages/profile/user.service';
import { AuthService } from './shared/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { routes } from './app.routes'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
     MenuComponent,
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
      console.log("signing out");
      this.authService.signOut();
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
