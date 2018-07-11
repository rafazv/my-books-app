import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { map } from 'rxjs/operators';

@Component({
  moduleId: module.id,
  providers: [AuthorsService],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() onSearch: EventEmitter<string>;

  service: AuthorsService;
  authors: any;

  ngOnInit(){
    this.service.getAuthor()
    .subscribe(value => { 
      this.authors = value;
      //console.log(this.authors);
    }, erro => {
      console.log(erro);
    });
    this.onSearch.subscribe(
      value => {
        this.searchAuthor(value);
      }
    );
  }

  constructor(service: AuthorsService) { 
    this.service = service;
  }

  searchAuthor(searchWord: string){
    this.service.searchAuthor('firstName":"'+ searchWord +'"}}')
      .subscribe(value => { 
        this.authors = value;
        console.log(this.authors);
      }, erro => {
        this.authors = '';
        console.log(erro);
        console.log("Don't exist author with name: "+searchWord);
      });

    //console.log("Digitou enter2");
  }

  delete(id: string){
    this.service.deleteAuthor(id)
      .subscribe(
        () => {
          let newAuthor = this.authors.slice(0);
          let index = newAuthor.indexOf(id);
          newAuthor.splice(index, 1);
          this.authors = newAuthor;
        }, 
        erro => {
          console.log(erro);
        }
      );
  }

}
