import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BankingService } from '../../services/banking.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {

  model: Transfer = new Transfer('', '', 0, '');
  status: boolean = false;
  message: string = ''
  userProfile: any
  creditAccounts:any

  constructor(private authService: AuthService, private bankingService: BankingService, private router: Router) { }

  ngOnInit() {
    this.getAvailableAccounts();
    if (this.authService.isLoggedIn()) {
      this.getProfile();
    }
    else {
      this.router.navigateByUrl("/login");
    }
  }

  submit(): void {
    this.bankingService.transfer(this.model).subscribe(
      response => {
        this.status = true;
        this.message = "Successful!";
        this.model = new Transfer('', '', 0, '');
      },
      error => {
        this.status = false;
        this.message = "Withdrawal Transaction Failed! Please Try Again";
      }
    );
  }


  getAvailableAccounts() {
    this.bankingService.getAvailableCreditAccounts().subscribe(
      (response) => {
        this.creditAccounts = response;
      },
      (error) => {
        console.error('Error fetching data', error);
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

export class Transfer {
  customerId: string;
  accountNumber: string;
  amount: number;
  creditAccountNumber: string;

  constructor(customerId: string, accountNumber: string, amount: number, creditAccountNumber: string) {
    this.customerId = customerId;
    this.accountNumber = accountNumber;
    this.amount = amount;
    this.creditAccountNumber = creditAccountNumber;
  }
}
