import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService} from "../user.service";


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  message: string = 'Please Login'

  login(): void {
    
    this.usersvc.login(this.user.userName, this.user.password ).subscribe(
      res => {
         this.systemsvc.loggedInUser = res;
         console.debug("User:", res);
         this.router.navigateByUrl("/request/create");
      },
      err => {
        this.message = "User Name/Password not found";       
        console.error("Invalid", err);
        this.systemsvc.loggedInUser = null;
        }
  );
  }

  constructor(
    private usersvc: UserService,
    private router: Router,
    private systemsvc: SystemService,

  ) { }

  ngOnInit(): void {
  }

}
