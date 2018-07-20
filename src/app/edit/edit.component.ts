import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  author = { };
  service: AuthorsService;
  router: Router;
  route: ActivatedRoute;

  constructor(service: AuthorsService, router: Router, route: ActivatedRoute) {
    this.service = service;
    this.router = router;
    this.route = route;

    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.service.getAuthorById(id)
        .subscribe(value => { 
          this.author = value;
        }, erro => {
          this.author = '';
          console.log(erro);
        });
      }
    });
  }

  ngOnInit() {
  }

  edit(){
    this.service.editAuthor(this.author)
    .subscribe(value => { 
      this.router.navigate(['/']);
    }, erro => {
      console.log(erro);
    });
  }

}
