import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserObject } from '../../profile/model/user-object';
import { UserService } from '../../profile/user.service';

@Component({
  selector: 'app-login-register',
  imports: [ CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
  loginEmail = '';
  loginPassword = '';

  loginError: string = '';

  registerEmail = '';
  registerPassword = '';

  currentUsers: UserObject[] = [
    {
      id: 1,
      name: 'Anna',
      email: 'anna@example.com',
      password: 'anna',
      phone: '+36201234567',
      address: {
        userId: 1,
        street: 'Something street',
        city: 'Whatever',
        postalcode: 6969
      }
    },
    {
      id: 2,
      name: 'Péter',
      email: 'peter@example.com',
      password: '1234',
      phone: '+36205557777',
      address: {
        userId: 2,
        street: 'Fő utca 12.',
        city: 'Budapest',
        postalcode: 1011
      }
    },
    {
      id: 3,
      name: 'Júlia',
      email: 'julia@example.com',
      password: 'titok',
      phone: '+36301234567',
      address: {
        userId: 3,
        street: 'Petőfi Sándor utca 45.',
        city: 'Szeged',
        postalcode: 6720
      }
    },
    {
      id: 4,
      name: 'Gergő',
      email: 'gergo@example.com',
      password: 'pwd123',
      phone: '+36302223333',
      address: {
        userId: 4,
        street: 'Dózsa György út 9.',
        city: 'Debrecen',
        postalcode: 4024
      }
    }
  ]
  loggedInUser: UserObject | null = null;

  constructor(private userService: UserService) {}

  onLogin() {
    const foundUser = this.currentUsers.find(
    user => user.email === this.loginEmail && user.password === this.loginPassword);

    if (foundUser) {
      this.loggedInUser = foundUser;
      this.loginError = '';
      console.log('Login successful:', foundUser);
      this.userService.setUser(foundUser);
      } else {
      this.loginError = 'Invalid email or password.';
      this.loggedInUser = null;
    }
  }

  onRegister() {
    console.log('Registering with', this.registerEmail, this.registerPassword);
  }

}
