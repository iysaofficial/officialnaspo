import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news10RoutingModule } from './news10-routing.module';
import { News10Component } from './news10.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News10Component
  ],
  imports: [
    CommonModule,
    news10RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News10Module { }
