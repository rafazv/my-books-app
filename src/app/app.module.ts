import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { AuthorsService } from './authors.service';
import { HttpClientModule } from "@angular/common/http";
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
