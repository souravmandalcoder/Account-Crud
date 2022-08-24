import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLibModule } from './material-lib.module';
import { NewsalesComponent } from '../components/dialogs/sales/newsales/newsales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatesalesComponent } from '../components/dialogs/sales/updatesales/updatesales.component';
import { AddPurchasesComponent } from '../components/dialogs/purchases/addPurchases/add-purchases.component';
import { UpdatePurchasesComponent } from '../components/dialogs/purchases/updatePurchases/update-purchases.component';
import { UpdateExpensesComponent } from '../components/dialogs/expenses/update-expenses/update-expenses.component';
import { AddExpensesComponent } from '../components/dialogs/expenses/add-expenses/add-expenses.component';


@NgModule({
  declarations: [
    NewsalesComponent,
    UpdatesalesComponent,
    AddPurchasesComponent,
    UpdatePurchasesComponent,
    AddExpensesComponent,
    UpdateExpensesComponent
  ],
  imports: [
    CommonModule,
    MaterialLibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MaterialLibModule]
})
export class CoreModule { }
