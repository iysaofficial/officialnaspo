import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Kategori23RoutingModule } from './kategori23-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { Kategori23Component } from './kategori23.component';


@NgModule({
  declarations: [
    Kategori23Component
  ],
  imports: [
    CommonModule,
    Kategori23RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Kategori23Module { }
