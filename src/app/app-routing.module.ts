import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent} from './user/user-create/user-create.component';
import { UserDetailComponent} from './user/user-detail/user-detail.component';
import { VendorListComponent} from './vendor/vendor-list/vendor-list.component';
import { VendorEditComponent} from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent} from './product/product-create/product-create.component';
import { ProductDetailComponent} from './product/product-detail/product-detail.component';
import { E404Component} from './core/e404/e404.component';
import { AboutComponent} from './core/about/about.component';
import { UserLoginComponent} from './user/user-login/user-login.component';
import { RequestListComponent} from './request/request-list/request-list.component';
import { RequestDetailComponent} from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestReviewListComponent} from './request/request-review-list/request-review-list.component';
import { RequestlineCreateComponent} from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent} from './requestline/requestline-edit/requestline-edit.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestlineComponent } from './requestline/requestline.component';

const routes: Routes = [
  {path: "", component: UserLoginComponent},
  {path: "user/list", component: UserListComponent},
  {path: "user/edit/:id", component: UserEditComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "user/detail/:id", component: UserDetailComponent},
  {path: "vendor/list", component: VendorListComponent},
  {path: "vendor/edit/:id", component: VendorEditComponent},
  {path: "vendor/detail/:id", component: VendorDetailComponent},
  {path: "vendor/create", component: VendorCreateComponent},
  {path: "product/list", component: ProductListComponent},
  {path: "product/edit/:id", component: ProductEditComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "product/detail/:id", component: ProductDetailComponent},
  {path: "about/list", component: AboutComponent},
  {path: "request/list", component: RequestListComponent},
  {path: "request/detail/:id", component: RequestDetailComponent},
  {path: "request/create", component: RequestCreateComponent},
  {path: "request/edit/:id", component: RequestEditComponent},
  {path: "request/review", component: RequestReviewListComponent},
  {path: "requestline/create", component: RequestlineCreateComponent},
  {path: "requestline/edit/:id", component: RequestlineEditComponent},
  {path: "requestline", component: RequestlineComponent},
  
  
  
  {path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
