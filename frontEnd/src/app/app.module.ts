import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { ChattingComponent } from './chatting/chatting.component';
import { ChangeLanguageComponent } from './sections/change-language/change-language.component';
import { CurrentUserService } from 'src/services/current.user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChattingComponent,
    ChangeLanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
