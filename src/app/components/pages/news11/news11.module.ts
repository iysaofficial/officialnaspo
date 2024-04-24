import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news11RoutingModule } from './news11-routing.module';
import { News11Component } from './news11.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News11Component
  ],
  imports: [
    CommonModule,
    news11RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News11Module { }
