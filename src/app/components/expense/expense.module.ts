import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class ExpenseModule { }
