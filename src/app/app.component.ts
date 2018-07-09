import { Component } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AuthorsService } from "./authors.service";

library.add(fas);
library.add(far);

@Component({
  providers: [AuthorsService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contentSearch : string;
  service: AuthorsService;
  authors: any;

  constructor(service: AuthorsService) {
    this.service = service;
  }

  search(){
    this.service.getAuthorById(this.contentSearch)
    .subscribe(value => { 
      this.authors = value;
      console.log(this.authors);
      this.contentSearch = '';
    }, erro => {
      console.log(erro);
      console.log("Don't exist author with id: "+this.contentSearch);
      this.contentSearch = '';
    });
  }
  

}
