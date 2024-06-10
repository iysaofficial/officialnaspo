import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Kategori23Component } from './kategori23.component';

const routes: Routes = [{ path: '', component: Kategori23Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Kategori23RoutingModule { }
