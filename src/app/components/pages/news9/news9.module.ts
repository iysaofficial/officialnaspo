import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news9RoutingModule } from './news9-routing.module';
import { News9Component } from './news9.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News9Component
  ],
  imports: [
    CommonModule,
    news9RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News9Module { }
