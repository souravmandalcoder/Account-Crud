import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Expenses } from 'src/app/models/expenses';
import { ExpensesService } from 'src/app/services/expenses.service';
import { AddExpensesComponent } from '../dialogs/expenses/add-expenses/add-expenses.component';
import { UpdateExpensesComponent } from '../dialogs/expenses/update-expenses/update-expenses.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpenseComponent implements OnInit {


  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchKey!: string;

  expenses: Expenses[] = []
  dataSource: any;

  // dataSource = ELEMENT_DATA;
  columnsToDisplay = ['invoiceNumber', 'IPAddress', 'expenseAmount', 'DCPaymentStatus', 'date', 'transactionID', 'action'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Expenses | null | undefined;

  constructor(private expensesService: ExpensesService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getExpenses()
  }

  getExpenses() {
    this.expensesService.getExpenses().subscribe(res => {
      this.expenses = res;
      this.expenses.reverse();
      console.log(this.expenses);
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['login'])
        }
      }
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

  onSearchClear() {
    this.searchKey = '';
    this.getExpenses()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

}



