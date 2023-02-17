import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['home']);
      }
    })
  }

  ngOnDestroy(): void {
    this.authService.user$.unsubscribe();
  }

  login() {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(['home']);
    });
  }
}
