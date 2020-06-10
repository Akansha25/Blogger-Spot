import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {

 
  url='http://localhost:3000/';
   constructor( private http:HttpClient ) { }

  register( formValue : UserRegService): Observable<any>{
    var reqHeader=new HttpHeaders({"No-Auth":'True'});
    return this.http.post(`${this.url}register`,formValue,{headers:reqHeader}) as Observable<any>
 }
}
