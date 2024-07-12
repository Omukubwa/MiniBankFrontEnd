import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: Credentials = new Credentials('', '');

  constructor(private authService: AuthService, private router: Router) {}

  submit(): void {
    this.authService.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}

export class Credentials {
  customerId: string;
  pin: string;

  constructor(customerId: string, pin: string) {
    this.customerId = customerId;
    this.pin = pin;
  }
}

