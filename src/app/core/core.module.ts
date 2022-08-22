import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLibModule } from './material-lib.module';
import { NewsalesComponent } from '../components/dialogs/sales/newsales/newsales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatesalesComponent } from '../components/dialogs/sales/updatesales/updatesales.component';

@NgModule({
  declarations: [
    NewsalesComponent,
    UpdatesalesComponent
  ],
  imports: [
    CommonModule,
    MaterialLibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MaterialLibModule]
})
export class CoreModule { }
