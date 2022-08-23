import { Component, OnInit } from '@angular/core';
import { Purchases } from 'src/app/models/purchases';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {

  purchases: Purchases[] = [];

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['invoiceNumber', 'IPAddress', 'DCAmount', 'DCPaymentStatus', 'date', 'transactionID', 'action'];
  dataSource: any;


  constructor(private purchasesService: PurchasesService) { }

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

}
