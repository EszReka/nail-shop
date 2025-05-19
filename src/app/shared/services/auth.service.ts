import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { UserObject } from '../../pages/profile/model/user-object';
import { AdressObject } from '../../pages/profile/model/adress-object';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  Auth, 
  signInWithEmailAndPassword,
  signOut,
  authState,
  User,
  UserCredential,
  createUserWithEmailAndPassword
} from '@angular/fire/auth';

import { 
  Firestore, 
  collection, 
  doc, 
  getDoc, 
  setDoc 
} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<UserObject | null>;
  private currentUserSubject = new BehaviorSubject<UserObject | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router,
  ) {
    this.currentUser = authState(this.auth).pipe(
      switchMap((user: User | null) => {
        if (!user) {
          this.currentUserSubject.next(null);
          return of(null);
        }
  
        const userDocRef = doc(this.firestore, 'Users', user.uid);
      
        return from(getDoc(userDocRef)).pipe(
          map(snapshot => {
            const data = snapshot.data();
  
            if (data) {
              const userObj = new UserObject(
                data['id'] ?? user.uid,
                data['name'] ?? '',
                data['email'] ?? user.email,
                '', // Do not expose password
                data['phone'] ?? '',
                data['address'] ?? { value: null } as unknown as AdressObject
              );
  
              this.currentUserSubject.next(userObj);
              return userObj;
            } else {
              const fallbackUser = new UserObject(
                user.uid,
                user.displayName ?? '',
                user.email ?? '',
                '', 
                '',
                { value: null } as unknown as AdressObject
              );
              this.currentUserSubject.next(fallbackUser);
              return fallbackUser;
            }
          })
        );
      })
    );
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signOut(): Promise<void> {
  try {
    console.log("Signing out...");
    localStorage.setItem('isLoggedIn', 'false');
    await signOut(this.auth);
    this.router.navigate(['/home']);
  } catch (error) {
    console.error('Sign-out error:', error);
  }
}


  isLoggedIn(): Observable<UserObject | null> {
    return this.currentUser;
  }

  updateLoginStatus(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
    console.log('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }

  async signUp(email: string, password: string, userData: Partial<UserObject>): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);

      const completeUserData: UserObject = new UserObject(
        userCredential.user.uid,
        userData.name ?? '',
        email,
        password,
        '',
        userData.address ?? { value: null } as unknown as AdressObject,
      );

      await this.createUserData(userCredential.user.uid, completeUserData);

      return userCredential;
    } catch (error) {
      console.error('Error during sign-up:', error);
      throw error;
    }
  }

  private async createUserData(userId: string, userData: UserObject): Promise<void> {
    const userRef = doc(collection(this.firestore, 'Users'), userId);
    
    const userPlain = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      phone: userData.phone,
      address: userData.address,
    };

    return setDoc(userRef, userPlain);
  }


}
