import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { News4Component } from './news4.component';

const routes: Routes = [{ path: '', component: News4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class news4RoutingModule { }
