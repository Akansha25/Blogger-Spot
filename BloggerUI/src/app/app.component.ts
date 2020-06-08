import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home/home.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blogger Spot';
  token :string;
  user:any;
 constructor(private router:Router, private homeService:HomeService){
this.homeService.userEmitter.subscribe(user=>{
  this.user=user;
});
this.user=localStorage.getItem('uname');
 }
 ngOnInit() {
  
 }
 logout(){
   this.user=null;
    this.homeService.doLogout();
    //this.flag=false;

  }
   
}