import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private authService: AuthService) { }

  user: User | null = null;
  isWaiting: boolean = true;

  ngOnInit(): void {
    this.user = this.authService.user;
    this.isWaiting = false;
  }
}
