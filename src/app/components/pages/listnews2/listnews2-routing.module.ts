import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNews2Component } from './listnews2.component';

const routes: Routes = [{ path: '', component: ListNews2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class listnews2RoutingModule { }
