import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { BookdeleteComponent } from './bookdelete/bookdelete.component';
import { RouterModule, Routes } from '@angular/router';
import { EditbookComponent } from './editbook/editbook.component';
import { BookaddComponent } from './bookadd/bookadd.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"search",
    component:BooksearchComponent
  },
  {
  path:"delete",
  component:BookdeleteComponent
  },
 
]




@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    BooksearchComponent,
    BookdeleteComponent,
    EditbookComponent,
    BookaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
