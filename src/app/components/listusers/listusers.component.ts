import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.list();
  }

  users: User[];

  list() {
    this.userService.list().subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }

  view(id:number){
    this.router.navigate(['viewuser',id]);
  }

 

}
