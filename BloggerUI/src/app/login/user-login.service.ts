import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  url : string;
  constructor( private http : HttpClient ) { 
   this.url= 'http://localhost:3000/'
  }

  login(cred : UserLoginService) : Observable<any>{
    var reqHeader=new HttpHeaders({"No-Auth":'True'});
  return this.http.post(`${this.url}login`, cred,{headers:reqHeader}) as Observable<any>;

}

}
