import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { FollowersComponent } from './followers/followers.component';
import { ReposComponent } from './repos/repos.component';
import { AnchorPipe } from './pipes/anchor.pipe';
import { TimePipe } from './pipes/time.pipe';
import { DatePipe } from '@angular/common';
import { AvatarPipe } from './pipes/avatar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FollowersComponent,
    ReposComponent,
    AnchorPipe,
    TimePipe,
    AvatarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
