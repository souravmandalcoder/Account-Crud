import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sales } from 'src/app/models/sales';
import { SalesService } from 'src/app/services/sales.service';
import { NewsalesComponent } from '../dialogs/sales/newsales/newsales.component';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  // id!: number;
  // invoiceNumber!: number;
  // IPAddress!: string;
  // receivedAmount!: number;
  // DCAmount!: number;
  // comapany!: string;
  // vendor!: string;
  // DCPaymentStatus!: string;
  // date!: string;
  // transactionID!: number;

  displayedColumns: string[] = ['invoiceNumber', 'IPAddress', 'receivedAmount', 'DCAmount', 'company', 'vendor', 'DCPaymentStatus', 'date', 'transactionID', 'action'];
  dataSource: any;
  sales: Sales[] = [];

  constructor(private salesService: SalesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmployee()
  }

  getEmployee() {
    this.salesService.getSales().subscribe(res => {
      this.sales = res;
      console.log(this.sales);
      this.dataSource = this.sales;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewsalesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


