import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'sales',
        loadChildren: () => import('./components/sales/sales.module').then((x) => x.SalesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'purchases',
        loadChildren: () => import('./components/purchases/purchases.module').then((x) => x.PurchasesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'expenses',
        loadChildren: () => import('./components/expenses/expenses.module').then((x) => x.ExpensesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'reports',
        loadChildren: () => import('./components/reports/reports.module').then((x) => x.ReportsModule),
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./components/user/login/login.module').then((x) => x.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
