import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactComponent } from './components/transact/transact.component';
import { BankingRoutingModule } from './banking-routing.module';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { MinistatementComponent } from './components/ministatement/ministatement.component';
import { FullstatementComponent } from './components/fullstatement/fullstatement.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    TransactComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    MinistatementComponent,
    FullstatementComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BankingRoutingModule,
    FormsModule
  ]
})
export class BankingModule { }
