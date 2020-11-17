import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.product)
    this.productsvc.change(this.product).subscribe(
      res => {
        console.log("Product Change:", res);
        this.router.navigateByUrl("/product/list")
        this.product = res;
      },
      err => { console.error(err); }
    )
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        console.log("Product:", res);
        this.product = res;
      },
      err => { console.error(err); }
    )
  }

}
