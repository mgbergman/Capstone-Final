import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request/request.class';
import { RequestLine } from './requestline.class';
import { RequestLineService } from './requestline.service';
import { SystemService } from '../system.service';


@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestlineComponent implements OnInit {

  request: Request;
  requestlines: RequestLine[];

  constructor(
    private requestsvc: RequestService,
    private requestlinessvc: RequestLineService,
    private systemsvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.systemsvc.checkLogin();

    let id = this.route.snapshot.params.id;

    this.requestsvc.get(id).subscribe(
      res => {
        console.debug("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );

    this.requestlinessvc.getLines(id).subscribe(
      res => {
        console.debug("Request Lines:", res);
        this.requestlines = res;
      },
      err => {
        console.error(err);
      }
    );
  }


  refreshLines():void
  {
    let id = this.route.snapshot.params.id;

    this.requestlinessvc.getLines(id).subscribe(
      res => {
        console.debug("Request Lines:", res);
        this.requestlines = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  refreshRequest():void
  {
    let id = this.route.snapshot.params.id;

    this.requestsvc.get(id).subscribe(
      res => {
        console.debug("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  submit():void
  {
    this.request.reasonForRejection = "";
    this.requestsvc.review(this.request).subscribe(
      res =>{

        console.debug("Submitted for review");
        this.refreshRequest();
      },
      err => {
        console.error("Failed to submit for review", err);
      }
    )
  }

  deleteLine(line:RequestLine):void
  {
    this.requestlinessvc.delete(line).subscribe(
      res => {
        console.debug("Line Item deleted!");
        this.refreshLines();
        this.refreshRequest();
      },
      err => {
        console.error("Could not delete line item: ", err);
      }
    );
  }
  }


