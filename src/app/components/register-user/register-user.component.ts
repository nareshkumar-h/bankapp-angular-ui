import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register(){
    //this.user =  {"name":"Naresh", "email":"naresh@gmail.com", "password":"pass123"};
    console.log("User", this.user);
    this.userService.register(this.user).subscribe ( (res)=>{
      console.log(res);
    });
  }

}
