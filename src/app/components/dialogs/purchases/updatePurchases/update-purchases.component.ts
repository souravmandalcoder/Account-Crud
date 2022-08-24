import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Purchases } from 'src/app/models/purchases';
import { PurchasesService } from 'src/app/services/purchases.service';
import { UpdatesalesComponent } from '../../sales/updatesales/updatesales.component';

@Component({
  selector: 'app-update-purchases',
  templateUrl: './update-purchases.component.html',
  styleUrls: ['./update-purchases.component.scss']
})
export class UpdatePurchasesComponent implements OnInit {

  updatePurchases = new Purchases()

  constructor(private purchasesService: PurchasesService, private dialogRef: MatDialogRef<UpdatesalesComponent>) { }

  ngOnInit(): void {
  }

  updateRecord() {
    this.purchasesService.updatePurchases(this.updatePurchases).subscribe(res => {
      this.dialogRef.close();

    })
  }

}
