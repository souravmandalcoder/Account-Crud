import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Sales } from 'src/app/models/sales';
import { SalesService } from 'src/app/services/sales.service';
import { NewsalesComponent } from '../dialogs/sales/newsales/newsales.component';
import { UpdatesalesComponent } from '../dialogs/sales/updatesales/updatesales.component';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  searchKey!: string;

  displayedColumns: string[] = ['invoiceNumber', 'IPAddress', 'receivedAmount', 'DCAmount', 'company', 'vendor', 'DCPaymentStatus', 'date', 'transactionID', 'action'];
  dataSource: any;
  sales: Sales[] = [];

  constructor(private salesService: SalesService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSales() {
    this.salesService.getSales().subscribe(res => {
      this.sales = res;
      this.sales.reverse();
      console.log("reversed sales = ", this.sales);
      this.dataSource = new MatTableDataSource(this.sales);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['login'])
          }
        }
      }
    )

  }

  deleteSales(id: number) {
    this.salesService.deleteSales(id).subscribe(_res => {
      this.getSales();
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewsalesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      setTimeout(() => {
        this.getSales()
        console.log("This is settimeout")
      }, 1000);
    });
  }

  openUpdateDialog(sales: Sales) {
    const dialogRef = this.dialog.open(UpdatesalesComponent);
    dialogRef.componentInstance.updateSales = sales;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      setTimeout(() => {
        this.getSales()
        console.log("This is settimeout")
      }, 1000);
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.getSales()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }


}


