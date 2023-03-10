import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  user$: Observable<User | null> = this.authService.user$;
  user: User | null = null;

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    })
    console.log(this.router.url);
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.authService.loginWithGoogle();
  }

  nagivateToHome() {
    if (this.router.url === '/home' || this.router.url === '/') {
      window.location.reload();
    } else {
      this.router.navigate(['/home']);
    }
  }
}
