import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BankingService } from '../../services/banking.service';

@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent {
  constructor(public authService: AuthService, private router: Router,private bankingService:BankingService) { }

  userProfile: any
  account:any
  miniStatement:any

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.getProfile();
    }
    else{
      this.router.navigateByUrl("/login");
    }
  }


  getFullStatement() {
    this.bankingService.getMiniStatement(this.account).subscribe(
      (response) => {
        this.miniStatement = response;
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
