import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLibModule } from './material-lib.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialLibModule
  ],
  exports: [MaterialLibModule]
})
export class CoreModule { }
