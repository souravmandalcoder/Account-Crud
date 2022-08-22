import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class SalesModule { }
