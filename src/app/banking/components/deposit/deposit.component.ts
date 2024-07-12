import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BankingService } from '../../services/banking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  model: Deposit = new Deposit('', '', 0);
  status: boolean = false;
  message: string = ''
  userProfile: any

  constructor(private authService: AuthService, private bankingService: BankingService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.getProfile();
    }
    else {
      this.router.navigateByUrl("/login");
    }
  }

  submit(): void {
    this.bankingService.deposit(this.model).subscribe(
      response => {
        this.status = true;
        this.message = "Successful!";
        this.model = new Deposit('', '', 0);
      },
      error => {
        this.status = false;
        this.message = "Deposit Transaction Failed! Please Try Again";
      }
    );
  }

  getProfile() {
    this.authService.getProfile().subscribe(
      (response) => {
        this.userProfile = response;
        this.model.accountNumber = this.userProfile?.accounts[0]?.accountNumber;
        this.model.customerId = this.userProfile?.customerId;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}

export class Deposit {
  customerId: string;
  accountNumber: string;
  amount: number;

  constructor(customerId: string, accountNumber: string, amount: number) {
    this.customerId = customerId;
    this.accountNumber = accountNumber;
    this.amount = amount;
  }
}