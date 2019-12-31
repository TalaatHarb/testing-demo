import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './integration-tests/home/home.component';
import { TodosComponent } from './unit-tests/06-services/todos.component';
import { UserDetailsComponent } from './integration-tests/3-user-details/user-details.component';
import { VoterComponent } from './unit-tests-ex/3- voter-component/voter.component';
import { UsersComponent } from './unit-tests-ex/4- user-component/users.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './integration-tests/2-todos/todo.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    HighlightDirective,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
