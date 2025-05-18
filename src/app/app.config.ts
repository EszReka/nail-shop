import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideFirebaseApp(() =>
      initializeApp({ projectId: "angularnailshop", 
        appId: "1:333693997492:web:64ecea89b736f5585a62e1", 
        storageBucket: "angularnailshop.firebasestorage.app",
        apiKey: "AIzaSyBFGvu1Orx6Y-ZghatB2ohSXvMuiACaihM", 
        authDomain: "angularnailshop.firebaseapp.com", 
        messagingSenderId: "333693997492" })), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore())]
};
