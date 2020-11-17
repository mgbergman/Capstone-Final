import { Component, OnInit } from '@angular/core';
import { RequestLineService} from 'src/app/requestline/requestline.service';
import { RequestLine } from '../requestline.class';
import { Request } from 'src/app/request/request.class';
import { RequestService} from 'src/app/request/request.service';
import { Product } from 'src/app/product/product.class';
import { ProductService} from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: RequestLine = new RequestLine();
  products : Product[] = [];
  requests : Request[] = []
  
  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private requestlinesvc= RequestLineService
  ) { }

  // save(): void{
  //   this.requestlinesvc.create(this.requests).subscribe(
  //     res=>{
  //       console.debug("PRequest Line created:",res);
  //       this.router.navigateByUrl("/RequestLine/list");
  //     },
  //     err => {
  //       console.error("ERROR creating product:",err);
  //     }
  //   )
  //   }
  ngOnInit(): void {  this.requestsvc.list().subscribe(
    res => { console.debug(res)
    this.requests = res as Request[]}
  );
  }

}
