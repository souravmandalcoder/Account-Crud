import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from 'src/app/core/core.module';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialLibModule } from './core/material-lib.module';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
