import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public authService: AuthService, private router: Router) {}

  userProfile: any

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.getProfile();
    };
  }

  getProfile() {
    this.authService.getProfile().subscribe(
      (response) => {
        this.userProfile = response;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
