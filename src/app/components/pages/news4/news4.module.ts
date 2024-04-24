import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { news4RoutingModule } from './news4-routing.module';
import { News4Component } from './news4.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    News4Component
  ],
  imports: [
    CommonModule,
    news4RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class News4Module { }
