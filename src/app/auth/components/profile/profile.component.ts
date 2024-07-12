import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public authService: AuthService, private router: Router) { }

  userProfile: any
  account:any

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.getProfile();
    }
    else{
      this.router.navigateByUrl("/login");
    }
  }

  getProfile() {
    this.authService.getProfile().subscribe(
      (response) => {
        this.userProfile = response;
        this.account = this.userProfile?.accounts[0]?.accountNumber
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
