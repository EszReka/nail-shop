import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserObject } from './model/user-object';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<UserObject | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  setUser(user: UserObject) {
    this.currentUserSubject.next(user);
  }

  getUser(): UserObject | null {
    return this.currentUserSubject.value;
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}
