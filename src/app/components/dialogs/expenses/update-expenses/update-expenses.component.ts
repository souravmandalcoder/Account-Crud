import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Expenses } from 'src/app/models/expenses';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-update-expenses',
  templateUrl: './update-expenses.component.html',
  styleUrls: ['./update-expenses.component.scss']
})
export class UpdateExpensesComponent implements OnInit {

  newExpenses = new Expenses()

  DCPaymentStatus: string[] = [
    'completed',
    'pending',
  ]

  constructor(private expensesService: ExpensesService, private dialogRef: MatDialogRef<UpdateExpensesComponent>) { }

  ngOnInit(): void {
  }

  updateExpenses() {
    this.expensesService.updateExpenses(this.newExpenses).subscribe(res => {
      console.log(this.newExpenses)
      this.dialogRef.close();

    })
  }

}
