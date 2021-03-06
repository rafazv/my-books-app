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

  getAuthor(): Observable<any>{
    return this.http.get(this.url+'/authors');
  }
  
  getAuthorById(id: string): Observable<any>{
    return this.http.get(this.url+'/authors/'+id);
  }

  editAuthor(author): Observable<any> {
    return this.http.put(this.url+'/authors', author, this.httpOptions);
  }

  addAuthor(author): Observable<any> {
    return this.http.post(this.url+'/authors', author, this.httpOptions);
  }

  deleteAuthor (id: string): Observable<any> {
    return this.http.delete(this.url+'/authors/'+id, this.httpOptions);
  }

  searchAuthor(value: string): Observable<any> {
    return this.http.get(this.url+'/authors?filter={"where":{"'+value);
  }

}
