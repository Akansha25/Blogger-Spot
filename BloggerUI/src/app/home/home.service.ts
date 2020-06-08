import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class HomeService {
//url:string;
private user=new Subject();
public userEmitter=this.user.asObservable();

userEmitChange(usr:any){
  this.user.next(usr);
}

  constructor(private http:HttpClient,private router:Router) {
    //this.url='http://localhost:3000/'
   }

   
  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('token');
    let removeUser=localStorage.removeItem('uname');
    if (removeToken == null&& removeUser==null) {
      this.router.navigate(['/home']);
    }
  }

  home(){
 const reqheaders = new HttpHeaders().set('Content-Type', 'application/json');
 
    return this.http.get(`/articles`,{headers:reqheaders});

 }

}