import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddArticleService {
  url:string;
  constructor(private http:HttpClient,private router:Router) { 
    this.url='http://localhost:3000/';
  }

addArticle(article){

  const reqheaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  return this.http.post(`${this.url}articles`,article,{headers:reqheaders}) as Observable<any>

}
  
}
