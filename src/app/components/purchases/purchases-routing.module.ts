import { NgModule } from '@angular/core';
import { PurchasesComponent } from './purchases.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PurchasesComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
