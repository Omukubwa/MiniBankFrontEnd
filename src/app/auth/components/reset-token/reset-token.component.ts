import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-token',
  templateUrl: './reset-token.component.html',
  styleUrls: ['./reset-token.component.css']
})
export class ResetTokenComponent {
  constructor(public authService: AuthService, private router: Router) { }

  customerId:any
  status: boolean = false;
  message: string = ''

  submit(): void {
    this.authService.getResetCode(this.customerId).subscribe(
      response => {
        this.status = true;
        this.message = "Reset Code sent to your email!";
        this.customerId = "";
      },
      error => {
        this.status = false;
        this.message = "Failed! Please Try Again";
      }
    );
  }
}
