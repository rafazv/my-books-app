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

  contentSearch: string;
  service: AuthorsService;
  authors: any;

  ngOnInit(){
    this.getAll();
  }

  constructor(service: AuthorsService) { 
    this.service = service;
  }

  getAll(){
    this.service.getAuthor()
    .subscribe(value => { 
      this.authors = value;
      //console.log(this.authors);
    }, erro => {
      console.log(erro);
    });
  }

  searchAuthor(event: any){
    if(event.key === "Enter"){
      if(this.contentSearch === ''){
        this.getAll();
      }
      else{
        this.service.searchAuthor('firstName":"'+ this.contentSearch +'"}}')
        .subscribe(value => { 
          this.authors = value;
          console.log(this.authors);
        }, erro => {
          this.authors = '';
          this.getAll();
          console.log(erro);
          console.log("Don't exist author with name: "+this.contentSearch);
        });
      }
    }
  }

  delete(id: string){
    this.service.deleteAuthor(id)
      .subscribe(
        () => {
          let index = this.authors.indexOf(id, 0);
          if(index > -1){
            this.authors.splice(index, 1);
          }
          this.getAll();
        }, 
        erro => {
          console.log(erro);
        }
      );
  }

}
