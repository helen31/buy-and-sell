import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public auth: AngularFireAuth) {}

  singInClicked(): void {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
