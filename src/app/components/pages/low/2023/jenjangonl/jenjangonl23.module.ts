import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { jenjangonl23RoutingModule } from './jenjangonl23-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { Jenjangonl23Component } from './jenjangonl23.component';


@NgModule({
  declarations: [
    Jenjangonl23Component
  ],
  imports: [
    CommonModule,
    jenjangonl23RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Jenjangonl23Module { }
