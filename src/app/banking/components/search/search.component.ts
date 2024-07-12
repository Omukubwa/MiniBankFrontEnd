import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BankingService } from '../../services/banking.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(public authService: AuthService, private router: Router, private bankingService: BankingService) { }

  userProfile: any
  account: any
  searchResult: any
  tranCode: any
  status: boolean = false;
  message: string = ''

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.getProfile();
    }
    else {
      this.router.navigateByUrl("/login");
    }
  }


  submit(): void {
    this.bankingService.searchTransactionUsingCode(this.tranCode).subscribe(
      response => {
        this.status = true;
        this.message = "Successful!";
        this.tranCode = "";
        this.searchResult = response;
      },
      error => {
        this.status = false;
        this.message = "Searching Transaction Failed! Please Try Again";
      }
    );
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
