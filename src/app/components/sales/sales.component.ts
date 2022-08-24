import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sales } from 'src/app/models/sales';
import { SalesService } from 'src/app/services/sales.service';
import { NewsalesComponent } from '../dialogs/sales/newsales/newsales.component';
import { UpdatesalesComponent } from '../dialogs/sales/updatesales/updatesales.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  displayedColumns: string[] = ['invoiceNumber', 'IPAddress', 'receivedAmount', 'DCAmount', 'company', 'vendor', 'DCPaymentStatus', 'date', 'transactionID', 'action'];
  dataSource: any;
  sales: Sales[] = [];

  constructor(private salesService: SalesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSales()
  }

  getSales() {
    this.salesService.getSales().subscribe(res => {
      this.sales = res;
      console.log(this.sales);
      this.dataSource = this.sales;
    })
  }

  deleteSales(id: number) {
    this.salesService.deleteSales(id).subscribe(res => {
      this.getSales();
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewsalesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateDialog(sales: Sales) {
    const dialogRef = this.dialog.open(UpdatesalesComponent);
    dialogRef.componentInstance.updateSales = sales;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


