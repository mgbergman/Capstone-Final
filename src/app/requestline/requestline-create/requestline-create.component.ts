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
  requests : Request= new Request();
  
  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private requestlinesvc: RequestLineService
  ) { }

  newChanges(): void {
  
  }
  
  save(): void{
    this.requestlinesvc.add(this.requestline).subscribe(
      res=>{
        console.debug("Request Line created:",res);
        this.router.navigateByUrl(`/requests/lines/${this.requests.id}`);
      },
      err => {
        console.error("ERROR creating product:",err);
      }
    );
  }
    ngOnInit(): void 
    {
      let id = this.route.snapshot.params.id;
      
      this.requestsvc.get(id).subscribe(
        res => { 
        console.debug(res)
        this.requests = res;
        this.requestline.request = this.requests;
      },
        err => {
          console.error(err);
        }
      );
      this.productsvc.list().subscribe(
        res =>
        {console.log(res);
        this.products = res as Product[]
      },
      err =>
      {
        console.error(err);
      }
      )
    }
  }
    
        
    
    
    
 
 
    
      
    
  


