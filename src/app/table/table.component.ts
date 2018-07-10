import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { map } from 'rxjs/operators';

@Component({
  moduleId: module.id,
  providers: [AuthorsService],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() id: string;

  @Output() search = new EventEmitter();

  service: AuthorsService;
  authors: any;

  constructor(service: AuthorsService) {
      
    this.search.emit();
    this.service = service;
    this.service.getAuthor()
    .subscribe(value => { 
      this.authors = value;
      //console.log(this.authors);
    }, erro => {
      console.log(erro);
    });
      
  }
}
