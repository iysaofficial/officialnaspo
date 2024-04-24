import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News9Component } from './news9.component';

const routes: Routes = [{ path: '', component: News9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news9RoutingModule { }
