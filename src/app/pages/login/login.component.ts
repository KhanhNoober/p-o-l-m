import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }

  WaitForRedirect: any;
  isWaiting: boolean = true;

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['home']);
      }
    })
    this.WaitForRedirect = setTimeout(() => {
      this.isWaiting = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    clearTimeout(this.WaitForRedirect);
  }

  login() {
    this.authService.loginWithGoogle();
  }
}
