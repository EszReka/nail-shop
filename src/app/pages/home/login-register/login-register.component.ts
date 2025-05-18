import { Component, OnDestroy } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserObject } from '../../profile/model/user-object';
import { AuthService } from '../../../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EmojiFormatPipe } from "../../../pipes/emoji-format.pipe";

@Component({
  selector: 'app-login-register',
  imports: [CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule, 
    EmojiFormatPipe],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent implements OnDestroy{
  authSubscription?: Subscription;

  loginEmail = '';
  loginPassword = '';

  loginError: string = '';

  registerName = '';
  registerEmail = '';
  registerPassword = '';
  registerPasswordAgain = '';

  signUpError: string = '';

  loggedInUser: UserObject | null = null;

  constructor(
    private router : Router, 
    private authService: AuthService) {}

  onLogin() {
    this.authService.signIn(this.loginEmail, this.loginPassword)
    .then(userCredential => {
      console.log('Login successful:', userCredential.user);
      this.authService.updateLoginStatus(true);
      this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.error('Login error:', error);
      
      switch(error.code) {
        case 'auth/user-not-found':
          this.loginError = 'No account found with this email address';
          break;
        case 'auth/wrong-password':
          this.loginError = 'Incorrect password';
          break;
        case 'auth/invalid-credential':
          this.loginError = 'Invalid email or password';
          break;
        default:
          this.loginError = 'Authentication failed. Please try again later.';
      }
    });
  }

  onRegister() {
    console.log('Registering with', this.registerEmail, this.registerPassword);
    
    if (this.registerPassword !== this.registerPasswordAgain) {
      this.signUpError = 'The passwords do not match.';
      return;
    }

    const newUser : Partial<UserObject> = {
        name : this.registerName,
        email: this.registerEmail,
        password : this.registerPassword
    }

    this.authService.signUp(this.registerEmail, this.registerPassword, newUser)
      .then(userCredential => {
        console.log('Registration succesful:', userCredential.user);
        this.authService.updateLoginStatus(true);
        this.router.navigateByUrl('/profile');
      })
      .catch(error => {
        console.error('Error occured while registering:', error);
        
        switch(error.code) {
          case 'auth/email-already-in-use':
            this.signUpError = 'This email already in use.';
            break;
          case 'auth/invalid-email':
            this.signUpError = 'Invalid email.';
            break;
          case 'auth/weak-password':
            this.signUpError = 'The password is too weak. Use at least 6 characters.';
            break;
          default:
            this.signUpError = 'An error has occurred during registration. Please try again later.';
        }
      });

  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }
}
