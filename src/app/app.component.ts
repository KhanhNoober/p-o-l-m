import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleState } from './redux/states/article.state';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
