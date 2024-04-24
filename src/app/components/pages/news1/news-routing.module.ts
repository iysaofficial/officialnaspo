import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News1Component } from './news1.component';

const routes: Routes = [{ path: '', component: News1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news1RoutingModule { }
