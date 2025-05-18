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
    EmojiFormatPipe
],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  @Input() user!: UserObject;

  @Output() updateUser = new EventEmitter<UserObject>();
  @Output() updateAdress = new EventEmitter<AdressObject>();

  
  addressToUpdate: AdressObject = {
    userId: 0,
    street: "",
    city: "",
    postalcode: 0
  };

  ngOnInit(){
    this.addressToUpdate = {
      userId: 0,
      street: "",
      city: "",
      postalcode: 0
    };
    /*this.user = {
      id: "",
      name: this.user.name,
      email: this.user.email,
      password: '',
      phone: "", 
      address : this.addressToUpdate
    }*/
  }

  onSave(updatedUser: UserObject) {
    this.updateUser.emit(updatedUser);
  }
  onSaveAdress(updatedAdress: AdressObject){
    this.updateAdress.emit(updatedAdress);
  }

}
