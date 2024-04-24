import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News8Component } from './news8.component';

const routes: Routes = [{ path: '', component: News8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news8RoutingModule { }
