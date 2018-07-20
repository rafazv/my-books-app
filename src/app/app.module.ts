import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthorsService } from './authors.service';
import { HttpClientModule } from "@angular/common/http";
import { TableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddComponent } from './add/add.component';
import { routing } from "./app.routes";
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    routing
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
