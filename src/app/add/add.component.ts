import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  fName: string;
  lName: string;
  service: AuthorsService;
  authors: any;

  constructor(service: AuthorsService) {
    this.service = service;
  }

  ngOnInit() {
  }

  add(){
    this.service.addAuthor(this.fName, this.lName)
    .subscribe(value => { 
      this.authors = value;
      console.log(this.authors);
    }, erro => {
      this.authors = '';
      console.log(erro);
    });
    this.fName='';
    this.lName='';
  }

}
