import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Expenses } from 'src/app/models/expenses';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {

  newExpenses = new Expenses()

  DCPaymentStatus: string[] = [
    'completed',
    'pending',
  ]

  constructor(private expensesService: ExpensesService, private dialogRef: MatDialogRef<AddExpensesComponent>) { }

  ngOnInit(): void {
  }

  addExpanses() {
    this.expensesService.newExpenses(this.newExpenses).subscribe(res => {
      console.log(this.newExpenses)
      this.dialogRef.close();
    })
  }

}
