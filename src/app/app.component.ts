import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = "info@digi-banking.com";
  phone: string = "+254701665104";
  orgName: string = "Compulynx Digi Banking Platform.";
  logo: string = "/assets/logo.png";

  year:number = 0
  
  constructor(public authService: AuthService,private router: Router) { }
  ngOnInit() {
    this.year = new Date().getFullYear();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
