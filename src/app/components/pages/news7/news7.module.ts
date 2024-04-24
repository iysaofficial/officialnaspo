import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news7RoutingModule } from './news7-routing.module';
import { News7Component } from './news7.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News7Component
  ],
  imports: [
    CommonModule,
    news7RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News7Module { }
