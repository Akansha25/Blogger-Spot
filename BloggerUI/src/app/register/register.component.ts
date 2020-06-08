import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UserRegService } from './user-reg.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signup: FormGroup;
  msg: string;

  
  constructor(private usrReg:UserRegService, private router:Router) { 
    
  }

  ngOnInit() {
    this.msg=null;
    this.signup= new FormGroup({
      'Name':new FormControl('John Doe',Validators.required),//first arg-default value,second-validators
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "pswd":new FormControl('',[Validators.required, 
        Validators.pattern(/^(?=.*?[a-z])(?=.*?\d).{7,20}/), 
        Validators.minLength(7), Validators.maxLength(20)]),
      "address":new FormControl('')
    })
  }
onsubmit(){

  this.usrReg.register(this.signup.value).subscribe(
    (sucess)=>{
    this.msg=sucess.message;
    this.router.navigate(['/login']);
    },(fail)=>{
      this.msg="user already exists";
      setTimeout(()=>{
        this.msg=null;
        this.signup.reset(); 
        },2000);
      
       }
  )
}


}
