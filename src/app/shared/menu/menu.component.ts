import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserObject } from '../../pages/profile/model/user-object';
import { UserService } from '../../pages/profile/user.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

   @Output() pageChanged = new EventEmitter<string>();

  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  currentUser: UserObject | null = null;

  constructor(private userService: UserService) {}

  openMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? 'bi bi-list-x' : 'bi bi-list';
   }
   
   closeMenuAndSelectPage(page: string) {
     this.menuValue = false;
     this.menu_icon = 'bi bi-list';
     this.pageChanged.emit(page);
   }

  ngOnInit(): void {
    this.userService.currentUser$.subscribe((user: UserObject | null) => {
      this.currentUser = user;
    }); 
  }
}
