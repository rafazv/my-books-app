import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AuthorsService } from './authors.service';
import { HttpClientModule } from "@angular/common/http";
import { TableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
