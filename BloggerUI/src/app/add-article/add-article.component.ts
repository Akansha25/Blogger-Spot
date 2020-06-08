import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddArticleService } from './add-article.service';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  
  title:string;
  body:string;
  msg:string;

  constructor(private addArticleService:AddArticleService, private authservice:HomeService ,private router : Router) { }

  ngOnInit() {
  }
  postArticle(artForm:NgForm){
    let author=localStorage.getItem('uname');
   let article={
     "title":artForm.value.articledata.titl,
     "body":artForm.value.articledata.bdy,
     "author":author
   }
   this.addArticleService.addArticle(article).subscribe((res)=>{
    this.msg=res.message;
    console.log(this.msg);
    this.router.navigate(['/home']); 
   },
   (err:HttpErrorResponse)=>{
    console.log(err.status)
    this.router.navigate(['/home']);
  
  })
    
}
}