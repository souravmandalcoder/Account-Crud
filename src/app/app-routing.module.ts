import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'sales',
        loadChildren: () => import('./components/sales/sales.module').then((x) => x.SalesModule)
      },
      {
        path: 'purchases',
        loadChildren: () => import('./components/purchases/purchases.module').then((x) => x.PurchasesModule)
      },
      {
        path: 'expenses',
        loadChildren: () => import('./components/expenses/expenses.module').then((x) => x.ExpensesModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./components/reports/reports.module').then((x) => x.ReportsModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
