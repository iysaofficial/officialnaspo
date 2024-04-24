import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News5Component } from './news5.component';

const routes: Routes = [{ path: '', component: News5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news5RoutingModule { }
