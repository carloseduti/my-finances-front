import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import toastr from 'toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router) {
  }

  signIn() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res => {
      console.log(res)
      toastr.success('Login successfully.')
      this.router.navigateByUrl('reports')
    }, error => {
      toastr.error('Error Authenticating')
    })
  }

  signOut() {
    return this.fireAuth.signOut().then(() => {
      this.router.navigateByUrl('login')
    });
  }

  getIdUser() {
    return getAuth()?.currentUser?.uid;
  }
}
