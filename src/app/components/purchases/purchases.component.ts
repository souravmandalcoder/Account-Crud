import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Purchases } from 'src/app/models/purchases';
import { PurchasesService } from 'src/app/services/purchases.service';
import { AddPurchasesComponent } from '../dialogs/purchases/addPurchases/add-purchases.component';
import { UpdatePurchasesComponent } from '../dialogs/purchases/updatePurchases/update-purchases.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  searchKey!: string;

  purchases: Purchases[] = [];

  displayedColumns: string[] = ['invoiceNumber', 'IPAddress', 'DCAmount', 'date', 'transactionID', 'action'];
  dataSource: any;


  constructor(private purchasesService: PurchasesService, public dialog: MatDialog, private router: Router) { }


  ngOnInit(): void {
    this.getPurchases()
  }

  getPurchases() {
    this.purchasesService.getPurchases().subscribe(res => {
      this.purchases = res;
      console.log(this.purchases);
      this.purchases.reverse()
      this.dataSource = new MatTableDataSource(this.purchases);
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

  deletePurchases(id: number) {
    this.purchasesService.deletePurchases(id).subscribe(res => {
      this.getPurchases();
    })
  }

  addPurchasesDialog() {
    const dialogRef = this.dialog.open(AddPurchasesComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      setTimeout(() => {
        this.getPurchases()
        console.log("This is settimeout")
      }, 1000);
    });

  }

  updatePurchasesDialog(purchases: Purchases) {
    const dialogRef = this.dialog.open(UpdatePurchasesComponent);
    dialogRef.componentInstance.updatePurchases = purchases;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      setTimeout(() => {
        this.getPurchases()
        console.log("This is settimeout")
      }, 1000);
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.getPurchases()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

}
