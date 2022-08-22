import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Sales } from 'src/app/models/sales';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-updatesales',
  templateUrl: './updatesales.component.html',
  styleUrls: ['./updatesales.component.scss']
})
export class UpdatesalesComponent implements OnInit {

  dataSource: any;

  company: string[] = [
    'Company1',
    'Company2',
    'Company3',
    'Company3',
    'Company4',
    'Company5',
    'Company6',
    'Company7',
  ];

  vendor: string[] = [
    'vendor1',
    'vendor2',
    'vendor3',
    'vendor4',
    'vendor5',
    'vendor6',
    'vendor7',
    'vendor8',
  ]

  DCPaymentStatus: string[] = [
    'completed',
    'pending',
  ]

  updateSales = new Sales();

  constructor(private salesService: SalesService, private dialogRef: MatDialogRef<UpdatesalesComponent>) { }

  ngOnInit(): void {
  }

  updateRecords() {
    this.salesService.updateSales(this.updateSales).subscribe(res => {
      this.dialogRef.close();
      this.getSales();
    })
  }

  getSales() {
    this.salesService.getSales().subscribe(res => {
      this.updateSales = res;
      console.log(this.updateSales);
      this.dataSource = this.updateSales;
    })
  }

}
