import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Expenses } from 'src/app/models/expenses';
import { ExpensesService } from 'src/app/services/expenses.service';
import { AddExpensesComponent } from '../dialogs/expenses/add-expenses/add-expenses.component';
import { UpdateExpensesComponent } from '../dialogs/expenses/update-expenses/update-expenses.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {


  displayedColumns: string[] = ['invoiceNumber', 'IPAddress', 'expenseAmount', 'DCPaymentStatus', 'date', 'transactionID', 'action'];
  dataSource: any;
  expenses: Expenses[] = []


  constructor(private expensesService: ExpensesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses() {
    this.expensesService.getExpenses().subscribe(res => {
      this.expenses = res;
      console.log(this.expenses);
      this.dataSource = this.expenses;
    })
  }

  deleteExpenses(id: number) {
    this.expensesService.deleteExpenses(id).subscribe(res => {
      this.getExpenses();
    })
  }

  addExpensesDialog() {
    const dialogRef = this.dialog.open(AddExpensesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      setTimeout(() => {
        this.getExpenses()
        console.log("This is settimeout")
      }, 1000);
    });
  }

  openUpdateDialog(expenses: Expenses) {
    const dialogRef = this.dialog.open(UpdateExpensesComponent);
    dialogRef.componentInstance.newExpenses = expenses;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      setTimeout(() => {
        this.getExpenses()
        console.log("This is settimeout")
      }, 1000);
    });
  }

}
