import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  isLogout!:boolean;

  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore, private router: Router, private ngZone: NgZone) {
    this.afAuth.authState.subscribe((user:any) =>{
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!)
        this.isLogout = true;
      }
      else{
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
        this.isLogout = false;
      }
    })
  }
 
  // Email/Password Signup
  signUpWithEmail(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((result)=>{
      // this.snedVerificationMail()
      this.SetUserData(result.user)
      this.router.navigate(['dashboard']);
    })
    .catch((error)=>{
      // window.alert(error.message)
      console.log(error)
    })
  }

  // Email/Password Login
  loginWithEmail(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) =>{
      this.SetUserData(result.user);
      this.afAuth.authState.subscribe((user)=>{
        if(user){
          this.router.navigate(['dashboard']);
        }
      })
    })
    .catch((error)=>{
      // window.alert(error.message);
      console.log(error)
    })
  }

  // Google Login
  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      // uid: user.uid,
      email: user.email,
      name: user.name,
      photoURL: user.photoURL,
      // emailVerified: user.emailVerified,
    };
    return userData;
  }
  
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
    // && user.emailVerified !== false ? true : false;
  }

  // Logout
  logout() {
    return this.afAuth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['account/login']);
      
    })
    ;
  }
}
