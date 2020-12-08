import { ChattingComponent } from './chatting/chatting.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ChattingComponent,
    pathMatch: "full"
  },
  {
    path: ":name",
    component: ChattingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
