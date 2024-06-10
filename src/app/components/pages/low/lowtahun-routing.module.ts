import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LowtahunComponent } from './lowtahun.component';

const routes: Routes = [{ path: '', component: LowtahunComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class lowtahunRoutingModule { }
