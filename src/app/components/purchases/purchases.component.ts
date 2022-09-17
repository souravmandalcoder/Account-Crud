import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Purchases } from 'src/app/models/purchases';
import { PurchasesService } from 'src/app/services/purchases.service';
import { AddPurchasesComponent } from '../dialogs/purchases/addPurchases/add-purchases.component';
import { UpdatePurchasesComponent } from '../dialogs/purchases/updatePurchases/update-purchases.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
// export class PurchasesComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
export class PurchasesComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  searchKey!: string;

  purchases: Purchases[] = [];

  displayedColumns: string[] = ['invoiceNumber', 'IPAddress', 'DCAmount', 'date', 'transactionID', 'action'];
  dataSource: any;


  constructor(private purchasesService: PurchasesService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getPurchases()
  }

  getPurchases() {
    this.purchasesService.getPurchases().subscribe(res => {
      this.purchases = res;
      console.log(this.purchases);
      this.dataSource = new MatTableDataSource(this.purchases);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
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
