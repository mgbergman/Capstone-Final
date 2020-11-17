import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService} from '../request.service';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];

  constructor(
    private requestsrv: RequestService
  ) { }

  ngOnInit(): void {
    this.requestsrv.list().subscribe(
      res => { console.log(res); 
      this.requests= res as Request[]
      },
      err => { console.error(err); }
    );

}
}
