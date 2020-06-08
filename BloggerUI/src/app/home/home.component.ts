import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { HttpErrorResponse } from '@angular/common/http';

//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p:number=1;
  articles:any;
  stringified:string;
  //isloggedin:boolean;
  emailid:string;
  constructor(private router:Router,private homeservice:HomeService) {
    //this.isloggedin=true;
   }

  ngOnInit() {
    
    this.homeservice.home().subscribe(
      (data1)=>{
      this.articles=data1;
      this.articles=this.articles.data
        
        this.articles=JSON.parse(this.articles);
        //console.log(this.articles[0].author);
    
      },(err:HttpErrorResponse)=>{
        console.log(err.status)
        this.router.navigate(['/home']);
      
      }
    )
  }

}
