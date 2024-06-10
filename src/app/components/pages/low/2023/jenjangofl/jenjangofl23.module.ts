import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { jenjangofl23RoutingModule } from './jenjangofl23-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { Jenjangofl23Component } from './jenjangofl23.component';


@NgModule({
  declarations: [
    Jenjangofl23Component
  ],
  imports: [
    CommonModule,
    jenjangofl23RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Jenjangofl23Module { }
