import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/services/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetTokenComponent } from './auth/components/reset-token/reset-token.component';
import { ResetPinComponent } from './auth/components/reset-pin/reset-pin.component';
import { ProfileComponent } from './auth/components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'banking', loadChildren: () => import('./banking/banking.module').then(m => m.BankingModule), canActivate: [AuthGuard] },
  { path: 'not-found', component: NotFoundComponent },
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'token',component:ResetTokenComponent},
  {path:'reset',component:ResetPinComponent},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
