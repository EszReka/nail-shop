import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserObject } from '../../pages/profile/model/user-object';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
   @Input() user: UserObject | null = null;
   @Output() pageChanged = new EventEmitter<string>();

  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  currentUser: UserObject | null = null;

  constructor(private authService: AuthService, private router : Router) {}

  openMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? 'bi bi-list-x' : 'bi bi-list';
   }

   closeMenuAndSelectPage(page: string) {
    console.log("navigating to: " + page)
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
    if (page === 'logout') {
          console.log('logout is called')
          this.authService.signOut(); 
      } else {
      this.router.navigate(['/' + page]);
  }
}


  ngOnInit(): void {
    this.authService.currentUser.subscribe((user: UserObject | null) => {
      this.currentUser = user;
    }); 
  }
}
