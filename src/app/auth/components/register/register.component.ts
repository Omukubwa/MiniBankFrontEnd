import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: Register = new Register('', '', '', 'User');
  status: boolean = false;
  message: string = ''

  constructor(private authService: AuthService, private router: Router) { }

  submit(): void {
    this.authService.register(this.model).subscribe(
      response => {
        this.status = true;
        this.message = "Registration Successful! Credentials sent to the email address you provided.Check and proceed to login";
        this.model = new Register('', '', '', 'User');
      },
      error => {
        this.status = false;
        this.message = "Registration Failed! Please Try Again";
      }
    );
  }
}

export class Register {
  customerName: string;
  emailAddress: string;
  customerId: string;
  role: string;

  constructor(customerName: string, emailAddress: string, customerId: string, role: string) {
    this.customerName = customerName;
    this.emailAddress = emailAddress;
    this.customerId = customerId;
    this.role = role;
  }

}
