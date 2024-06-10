import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jenjangofl23Component } from './jenjangofl23.component';

const routes: Routes = [{ path: '', component: Jenjangofl23Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class jenjangofl23RoutingModule { }
