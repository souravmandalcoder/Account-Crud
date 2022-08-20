import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLibModule } from './material-lib.module';
import { NewsalesComponent } from '../components/dialogs/sales/newsales/newsales.component';



@NgModule({
  declarations: [
    NewsalesComponent
  ],
  imports: [
    CommonModule,
    MaterialLibModule
  ],
  exports: [MaterialLibModule]
})
export class CoreModule { }
