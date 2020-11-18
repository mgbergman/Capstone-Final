import { Product } from 'src/app/product/product.class';
import { Request } from 'src/app/request/request.class';

export class RequestLine {
    id:         number = 0;
    request: Request = new Request;
    product: Product = new Product;
    quantity:   number = 1;
    
constructor() {
    }

}