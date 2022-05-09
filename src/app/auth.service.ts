import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import firebase from 'firebase/compat';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userId: string | null = null;
  isAuthenticated$: Observable<boolean>;
  private user$: Observable<firebase.User | null>;

  constructor(
    private localStorage: LocalStorageService,
    private auth: AngularFireAuth
  ) {
    this.user$ = this.auth.user;
    this.isAuthenticated$ = this.user$.pipe(map((user) => !!user));
    this.user$.pipe(take(1)).subscribe((user) => {
      this.userId = user ? user.uid : null;
    });
  }

  getToken(): string {
    return this.localStorage.get('token')!;
  }

  signIn(): void {
    this.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((userCredential) => {
        return userCredential.user!.getIdToken();
      })
      .then((token) => {
        this.setToken(token!);
      });
  }

  signOut(): void {
    this.auth.signOut().then(() => {
      this.localStorage.clear();
    });
  }

  private setToken(token: string): void {
    this.localStorage.set('token', token);
  }
}
