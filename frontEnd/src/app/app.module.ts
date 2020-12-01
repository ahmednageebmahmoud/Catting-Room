import { HttpInterceptorService } from './../services/http/http.intercptor.service';
import { GroupFilterPipe } from './../pipes/group.filter.pipe';
import { HttpService } from './../services/http/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { ChattingComponent } from './chatting/chatting.component';
import { ChangeLanguageComponent } from './sections/change-language/change-language.component';
import { CurrentUserService } from 'src/services/current.user.service';
import { GroupsComponent } from './sections/groups/groups.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { LoggedUserComponent } from './sections/logged-user/logged-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChattingComponent,
    ChangeLanguageComponent,
    GroupsComponent,
    GroupFilterPipe,
    LoggedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CurrentUserService,HttpService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
 