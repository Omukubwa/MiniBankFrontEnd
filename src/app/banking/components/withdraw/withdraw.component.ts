import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BankingService } from '../../services/banking.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  model: Withdraw = new Withdraw('', '', 0);
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
    this.bankingService.withdraw(this.model).subscribe(
      response => {
        this.status = true;
        this.message = "Successful!";
        this.model = new Withdraw('', '', 0);
      },
      error => {
        this.status = false;
        this.message = "Withdrawal Transaction Failed! Please Try Again";
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

export class Withdraw {
  customerId: string;
  accountNumber: string;
  amount: number;

  constructor(customerId: string, accountNumber: string, amount: number) {
    this.customerId = customerId;
    this.accountNumber = accountNumber;
    this.amount = amount;
  }
}
