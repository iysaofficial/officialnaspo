import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News3Component } from './news3.component';

const routes: Routes = [{ path: '', component: News3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news3RoutingModule { }
