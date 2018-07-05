import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { AuthorsService } from './authors.service';
import { HttpClientModule } from "@angular/common/http";
import { TableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListagemComponent } from './listagem/listagem.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
