import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  author = { };
  service: AuthorsService;
  authors: any;
  router: Router;

  constructor(service: AuthorsService, router: Router) {
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  add(){
    this.service.addAuthor(this.author)
    .subscribe(value => { 
      this.authors = value;
      this.router.navigate(['/']);
    }, erro => {
      console.log(erro);
    });
  }

}
