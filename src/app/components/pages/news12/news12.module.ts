import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news12RoutingModule } from './news12-routing.module';
import { News12Component } from './news12.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News12Component
  ],
  imports: [
    CommonModule,
    news12RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News12Module { }
