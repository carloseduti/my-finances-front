import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-finances';

  constructor(public router: Router, private auth: AuthenticationService) {}

  ngOnInit(): void {
  }

  signOut(){
    this.auth.signOut();
  }

}
