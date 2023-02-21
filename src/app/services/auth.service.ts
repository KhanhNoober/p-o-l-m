import { Injectable } from '@angular/core';
import { GoogleAuthProvider, Auth, signInWithPopup, User } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | null = null;
  user$ = new Subject<User | null>();

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged(user => {
      this.user = user;
      this.user$.next(user);
    })
  }

  async loginWithGoogle() {
    let provider = new GoogleAuthProvider()
    return await signInWithPopup(this.auth, provider)
  }

  async logout() {
    this.auth.signOut().then(() => {
      window.location.reload();
    })
  }
}
