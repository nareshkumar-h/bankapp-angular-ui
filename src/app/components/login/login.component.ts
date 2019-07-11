import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  login(){
   // this.email = "naresh@gmail.com";
   // this.password = "pass123";
    console.log("Login:", this.email, this.password);
    this.userService.login(this.email, this.password).subscribe ( (res)=>{
      console.log(res);
    });

  }
}
