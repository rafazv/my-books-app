import { Component, Input } from '@angular/core';
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

  service: AuthorsService;
  mensagem: string = '';
  authors: Object[] = [];

  constructor(service: AuthorsService) {
      
    this.service = service;
    this.service.getAuthor();
    


    
    this.service.getAuthor().
    map(res => res.json())
    .subscribe(authors => { 
      this.authors = authors; 
      console.log(this.authors);
    }, erro => console.log(erro));
      
  }

}
