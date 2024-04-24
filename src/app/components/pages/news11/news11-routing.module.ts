import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News11Component } from './news11.component';

const routes: Routes = [{ path: '', component: News11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news11RoutingModule { }
