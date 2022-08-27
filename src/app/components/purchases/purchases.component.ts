import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Purchases } from 'src/app/models/purchases';
import { PurchasesService } from 'src/app/services/purchases.service';
import { AddPurchasesComponent } from '../dialogs/purchases/addPurchases/add-purchases.component';
import { UpdatePurchasesComponent } from '../dialogs/purchases/updatePurchases/update-purchases.component';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
// export class PurchasesComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
export class PurchasesComponent implements OnInit {

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
      this.dataSource = this.purchases;

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
      this.getPurchases();
      this.ngOnInit();
      // console.log(`Dialog result: ${result}`);
    });

  }

  updatePurchasesDialog(purchases: Purchases) {
    const dialogRef = this.dialog.open(UpdatePurchasesComponent);
    dialogRef.componentInstance.updatePurchases = purchases;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
