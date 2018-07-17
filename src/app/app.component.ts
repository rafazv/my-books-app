import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() eventSearch: EventEmitter<string> = new EventEmitter();

  constructor(service: AuthorsService) {
    this.service = service;
  }

  onSearch(event: any){
    if(event.key === "Enter"){
      this.eventSearch.emit(this.contentSearch);
    }
  }
  

}
