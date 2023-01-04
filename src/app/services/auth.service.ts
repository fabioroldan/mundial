import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Observable, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private auth: Auth) { }

  onAuthChange() {
    return onAuthStateChanged(this.auth, user => {
      this.isLoggedIn = !!user
    }
    );
  }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    console.log('AUTH', this.auth)
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    console.log(this.auth)
    return signOut(this.auth);
  }

  getUserEmail(){
    return this.auth.currentUser?.email;
  }
}
