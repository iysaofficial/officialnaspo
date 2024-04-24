import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news3RoutingModule } from './news3-routing.module';
import { News3Component } from './news3.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News3Component
  ],
  imports: [
    CommonModule,
    news3RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News3Module { }
