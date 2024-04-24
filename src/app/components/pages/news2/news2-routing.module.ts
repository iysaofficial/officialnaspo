import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News2Component } from './news2.component';

const routes: Routes = [{ path: '', component: News2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news2RoutingModule { }
