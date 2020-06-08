import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLoginService } from './user-login.service';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:string
  pwd :string
  
  errortext: String =null
  successtext:String =null
  constructor(private usrlogin:UserLoginService, private authservice:HomeService ,private router : Router) {  }

  ngOnInit() {
  }
  onSubmit(form:NgForm) {
    
    console.log(form.value.userdata.username);
    this.usrlogin.login(form.value.userdata).subscribe(
      (success)=>{
        if(success.tokenno){
          console.log(success.message);
          
        this.successtext="Logged in successfully";
        localStorage.setItem("token",success.tokenno);
        this.authservice.userEmitChange(this.uname);
        localStorage.setItem("uname",this.uname);
        //console.log(this.uname);
       
        this.router.navigate(['/home']);
        }
        else{
          this.errortext=success.message;
          this.router.navigate(['/register']);
        }
        
      },
      (fail)=>{

      }
    )
  
        
    }

}
