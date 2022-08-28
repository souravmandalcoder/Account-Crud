import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Purchases } from 'src/app/models/purchases';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-add-purchases',
  templateUrl: './add-purchases.component.html',
  styleUrls: ['./add-purchases.component.scss']
})
export class AddPurchasesComponent implements OnInit {

  newPurchases = new Purchases()

  constructor(private purchasesService: PurchasesService, private dialogRef: MatDialogRef<AddPurchasesComponent>) { }

  ngOnInit(): void {
  }

  addPurchases() {
    this.purchasesService.addPurchases(this.newPurchases).subscribe(res => {
      console.log(this.newPurchases)
      this.dialogRef.close();
    })
  }
}
