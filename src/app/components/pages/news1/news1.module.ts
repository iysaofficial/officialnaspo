import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news1RoutingModule } from './news-routing.module';
import { News1Component } from './news1.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News1Component
  ],
  imports: [
    CommonModule,
    news1RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News1Module { }
