import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AddBlogComponent } from './add-blog/add-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
