import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierComponent } from './cashier/cashier.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'cashier', component: CashierComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
