import { Component } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { TableComponent } from '../table/table.component';

@Component({
    moduleId: module.id,
    selector: 'app-listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

  authors: TableComponent[] = [];
  service: AuthorsService;
  mensagem: string = '';

  constructor(service: AuthorsService) {
      
      this.service = service;
      this.service.getAuthor().subscribe(authors => { 
        this.authors = authors;
      }, erro => console.log(erro));
      
  }

 }