import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { UserObject } from '../profile/model/user-object';
import { AuthService } from '../../shared/services/auth.service';
import { RouterModule } from '@angular/router';
import { EmojiFormatPipe } from "../../pipes/emoji-format.pipe";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    LoginRegisterComponent,
    EmojiFormatPipe,
    RouterModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentUser: UserObject | null = null;

  constructor(
     private authService: AuthService) {}


ngOnInit() {
    this.authService.currentUser.subscribe((user: UserObject | null) => {
      this.currentUser = user;
    });
  }
}
