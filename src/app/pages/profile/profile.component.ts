import {Component, Input, Output, EventEmitter} from '@angular/core';
import { UserObject } from './model/user-object';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() user!: UserObject;
  @Output() updateUser = new EventEmitter<UserObject>();

  onSave(updatedUser: UserObject) {
    this.updateUser.emit(updatedUser);
  }
}
