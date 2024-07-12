import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BankingService } from '../../services/banking.service';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent {
  constructor(public authService: AuthService, private router: Router,private bankingService:BankingService) { }

  userProfile: any
  account:any
  fullStatement:any

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.getProfile();
    }
    else{
      this.router.navigateByUrl("/login");
    }
  }


  getFullStatement() {
    this.bankingService.getFullStatement(this.account).subscribe(
      (response) => {
        this.fullStatement = response;
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
        this.account = this.userProfile?.accounts[0]?.accountNumber
        this.getFullStatement();
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
