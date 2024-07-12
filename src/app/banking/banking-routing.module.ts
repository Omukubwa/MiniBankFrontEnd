import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactComponent } from './components/transact/transact.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { MinistatementComponent } from './components/ministatement/ministatement.component';
import { FullstatementComponent } from './components/fullstatement/fullstatement.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'transact', component: TransactComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'statement-mini', component: MinistatementComponent },
  { path: 'statement-full', component: FullstatementComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingRoutingModule { }
