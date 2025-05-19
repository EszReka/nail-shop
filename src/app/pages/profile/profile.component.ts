import {Component, Input, Output, EventEmitter} from '@angular/core';
import { UserObject } from './model/user-object';
import { AdressObject } from './model/adress-object';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { EmojiFormatPipe } from "../../pipes/emoji-format.pipe";
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
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
    EmojiFormatPipe,
    CommonModule
],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  currentUser: UserObject | null = null;

  @Output() updateUser = new EventEmitter<UserObject>();
  @Output() updateAdress = new EventEmitter<AdressObject>();

  constructor(private authService : AuthService){}

  addressToUpdate: AdressObject = {
    userId: 0,
    street: "",
    city: "",
    postalcode: 0
  };

  onSave(updatedUser: UserObject) {
    this.updateUser.emit(updatedUser);
  }
  onSaveAdress(updatedAdress: AdressObject){
    this.updateAdress.emit(updatedAdress);
  }

   ngOnInit() {
    this.authService.currentUser.subscribe((user: UserObject | null) => {
      this.currentUser = user;
      console.log('User from AuthService:', user);
    });
  }

}
