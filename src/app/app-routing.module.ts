import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './integration-tests/3-user-details/user-details.component';
import { UsersComponent } from './unit-tests-ex/4- user-component/users.component';
import { TodosComponent } from './unit-tests/06-services/todos.component';
import { HomeComponent } from './integration-tests/home/home.component';


export const routes: Routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
