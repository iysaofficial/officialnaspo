import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news6RoutingModule } from './news6-routing.module';
import { News6Component } from './news6.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News6Component
  ],
  imports: [
    CommonModule,
    news6RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News6Module { }
