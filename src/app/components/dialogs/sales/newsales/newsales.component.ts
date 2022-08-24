import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/models/sales';
import { SalesService } from 'src/app/services/sales.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-newsales',
  templateUrl: './newsales.component.html',
  styleUrls: ['./newsales.component.scss']
})
export class NewsalesComponent implements OnInit {

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

  newSales = new Sales();

  constructor(private salesService: SalesService, private dialogRef: MatDialogRef<NewsalesComponent>) { }

  ngOnInit(): void {

  }

  addSales() {
    this.salesService.newSales(this.newSales).subscribe(res => {
      console.log(this.newSales)
      this.dialogRef.close();
    })
  }

}
