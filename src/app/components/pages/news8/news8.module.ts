import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news8RoutingModule } from './news8-routing.module';
import { News8Component } from './news8.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News8Component
  ],
  imports: [
    CommonModule,
    news8RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News8Module { }
