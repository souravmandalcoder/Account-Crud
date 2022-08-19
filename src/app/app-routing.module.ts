import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { SalesModule } from './components/sales/sales.module';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'sales',
        loadChildren: () => import('./components/sales/sales.module').then((x) => x.SalesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
