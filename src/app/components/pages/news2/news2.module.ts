import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news2RoutingModule } from './news2-routing.module';
import { News2Component } from './news2.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News2Component
  ],
  imports: [
    CommonModule,
    news2RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News2Module { }
