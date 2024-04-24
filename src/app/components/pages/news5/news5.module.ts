import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news5RoutingModule } from './news5-routing.module';
import { News5Component } from './news5.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News5Component
  ],
  imports: [
    CommonModule,
    news5RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News5Module { }
