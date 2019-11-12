import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedComponent } from './red/red.component';
import { FromComponent } from './from/from.component';

const routes: Routes = [
  {path:'red', component: RedComponent},
  {path:'form', component: FromComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
