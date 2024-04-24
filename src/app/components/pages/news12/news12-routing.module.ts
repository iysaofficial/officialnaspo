import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News12Component } from './news12.component';

const routes: Routes = [{ path: '', component: News12Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news12RoutingModule { }
