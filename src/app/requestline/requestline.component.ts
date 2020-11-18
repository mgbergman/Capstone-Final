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

  constructor() { }

  ngOnInit(): void {
  }

}
