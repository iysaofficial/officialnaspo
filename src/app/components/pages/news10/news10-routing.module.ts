import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News10Component } from './news10.component';

const routes: Routes = [{ path: '', component: News10Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news10RoutingModule { }
