import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import toastr from 'toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login: String;
  password: String;

  constructor(public router: Router,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.auth.signIn();
  }

}
