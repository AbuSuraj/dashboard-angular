import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticat = false;

  constructor(private afAuth: AngularFireAuth) {}

  // login(username: string, password: string): boolean {
  //   // In a real application, you would communicate with your backend to authenticate the user.
  //   // For this example, let's assume the username and password are valid.
  //   if (username === 'user' && password === 'password') {
  //     this.isAuthenticat = true;
  //     return true;
  //   }
  //   return false;
  // }

  // logout(): void {
  //   this.isAuthenticat = false;
  // }

  // isAuthenticated(): boolean {
  //   return this.isAuthenticat;
  // }
  // Email/Password Signup
  signUpWithEmail(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Email/Password Login
  loginWithEmail(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Google Login
  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  // Logout
  logout() {
    return this.afAuth.signOut();
  }

  isLoggedIn(): boolean {
    return !!this.afAuth.currentUser;
  }
}
