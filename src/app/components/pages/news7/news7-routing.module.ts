import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News7Component } from './news7.component';

const routes: Routes = [{ path: '', component: News7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news7RoutingModule { }
