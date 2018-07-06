import { Component, Input, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Component({
  moduleId: module.id,
  providers: [AuthorsService],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() id: string;

  service: AuthorsService;
  mensagem: string = '';
  authors: any;

  constructor(service: AuthorsService, private httpClient: HttpClient ) {
      
    this.service = service;
    // this.service.getAuthor();    
    // this.service.getAuthor().
    // map(res => res.json())
    // .subscribe(authors => { 
    //   this.authors = authors; 
    //   console.log(this.authors);
    // }, erro => console.log(erro));
      
  }

  ngOnInit(){
    this.getAuthor();
  }

  getAuthor(){
    this.httpClient.get('https://bibliapp.herokuapp.com/api/authors')
    .subscribe(
      value => {         
        this.authors = value;    
      }
    );
  }
  
}
