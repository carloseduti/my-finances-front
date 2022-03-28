import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import toastr from 'toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login: String;
  password: String;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    if (this.login == 'admin' && this.password == '123456') {
      toastr.success('Login successfully.')
      this.router.navigateByUrl('reports')
    } else {
      toastr.error('Username or Password Incorrect ')
    }
  }

}
