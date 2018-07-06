import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class AuthorsService {

  private url = 'https://bibliapp.herokuapp.com/api';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return Observable.throw(error);
  }

  //do getAuthor()
  
  getAuthorById(id: number): Observable<any>{
    return this.http.get(this.url+'/authors/'+id).catch(this.formatErrors);
  }

  updateAuthor(firstName: string, lastName: string): Observable<any> {
    const author = {
      'firstName': firstName,
      'lastName': lastName
    };

    return this.http.put(this.url+'/authors', author, this.httpOptions).catch(this.formatErrors);
  }

  addAuthor(firstName: string, lastName: string): Observable<any> {
    const author = {
      'firstName': firstName,
      'lastName': lastName
    };

    return this.http.post(this.url+'/authors', author, this.httpOptions).catch(this.formatErrors);
  }

  deleteAuthor (id: number): Observable<any> {
    return this.http.delete(this.url+'/authors/'+id, this.httpOptions).catch(this.formatErrors);
  }

  searchAuthor(value: string): Observable<any> {
    return this.http.get(this.url+'/authors?filter='+value).catch(this.formatErrors);
  }

}
