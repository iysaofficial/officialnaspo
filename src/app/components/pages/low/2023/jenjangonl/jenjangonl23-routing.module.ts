import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jenjangonl23Component } from './jenjangonl23.component';

const routes: Routes = [{ path: '', component: Jenjangonl23Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class jenjangonl23RoutingModule { }
