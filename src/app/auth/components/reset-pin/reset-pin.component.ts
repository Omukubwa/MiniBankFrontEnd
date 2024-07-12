import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.css']
})
export class ResetPinComponent {
  model: Reset = new Reset('', '');
  status: boolean = false;
  message: string = ''

  constructor(private authService: AuthService, private router: Router) { }

  submit(): void {
    this.authService.resetPin(this.model).subscribe(
      response => {
        this.status = true;
        this.message = "Successful! New Credentials sent to your email address.Check and proceed to login";
        this.model = new Reset('', '');
      },
      error => {
        this.status = false;
        this.message = "Failed! Please Try Again";
      }
    );
  }
}

export class Reset {
  customerId: string;
  token: string;

  constructor(customerId: string, token: string) {
    this.customerId = customerId;
    this.token = token;
  }
}
