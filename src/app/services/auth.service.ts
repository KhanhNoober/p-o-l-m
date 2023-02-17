import { Injectable } from '@angular/core';
import { GoogleAuthProvider, Auth, signInWithPopup, User } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {
    this.user = this.auth.currentUser;
    this.user$.next(this.user);

    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.user$.next(this.user);
      } else {
        this.user = null;
        this.user$.next(this.user);
      }
    });
  }

  user!: User | null;
  user$ = new Subject<User | null>();

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
