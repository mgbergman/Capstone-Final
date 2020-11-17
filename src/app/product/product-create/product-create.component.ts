import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void{
    this.productsvc.create(this.product).subscribe(
      res=>{
        console.debug("Product created:",res);
        this.router.navigateByUrl("/product/list");
      },
      err => {
        console.error("ERROR creating product:",err);
      }
    )
  }



  ngOnInit(): void {
  }

}

