import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Deposit } from '../components/deposit/deposit.component';
import { Observable, tap } from 'rxjs';
import { Transfer } from '../components/transfer/transfer.component';
import { Withdraw } from '../components/withdraw/withdraw.component';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  private readonly apiUrl = environment.apiUrl;
  constructor(private http: HttpClient
  ) { }
  
  deposit(data:Deposit): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Transaction/Deposit`, data)
      .pipe(
        tap(response => {
          if (response.status == true) {
            
          }
        })
      );
  }

  withdraw(data:Withdraw): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Transaction/Withdraw`, data)
      .pipe(
        tap(response => {
          if (response.status == true) {
            
          }
        })
      );
  }

  transfer(data:Transfer): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Transaction/Transfer`, data)
      .pipe(
        tap(response => {
          if (response.status == true) {
            
          }
        })
      );
  }

  getFullStatement(account:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Account/FullStatement?accountNo=`+account);
  }

  getMiniStatement(account:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Account/MiniStatement?accountNo=`+account);
  }

  getAvailableCreditAccounts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Transaction/CreditAccounts`);
  }

  searchTransactionUsingCode(code:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Transaction/Search?code=`+code);
  }
}
