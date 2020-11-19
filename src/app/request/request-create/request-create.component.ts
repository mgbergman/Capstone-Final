import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class'

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit 
{
  request: Request = new Request();
  buttonsav: string = "btn btn-primary";
  buttondel: string = "btn btn-danger";
  saveMsg: string = "Save";
  user: User [] = [];

  constructor(
    private requestsvc: RequestService,
    private systemsvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.systemsvc.checkLogin();
    this.request.user = this.systemsvc.loggedInUser;
  }

  new(): void
  {
    this.buttonsav = "btn btn-primary";

  }

  save(): void
  {
    this.requestsvc.add(this.request).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl("/requests");
        this.buttonsav = "btn btn-success";
        this.saveMsg = "Saved!";
      },
      err => {
        this.buttonsav = "btn btn-danger";
        this.saveMsg = "Failed!";
        console.error("Could not add Request: ", err);
      }
    );
  }
}
