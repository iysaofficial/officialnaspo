import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News6Component } from './news6.component';

const routes: Routes = [{ path: '', component: News6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news6RoutingModule { }
