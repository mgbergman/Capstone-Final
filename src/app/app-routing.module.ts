import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent} from './user/user-create/user-create.component';
import { UserDetailComponent} from './user/user-detail/user-detail.component';

const routes: Routes = [
  {path: "user/list", component: UserListComponent},
  {path: "user/edit/:id", component: UserEditComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "user/detail/:id", component: UserDetailComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
