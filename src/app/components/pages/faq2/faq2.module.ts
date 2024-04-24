import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Faq2RoutingModule } from './faq2-routing.module';
import { Faq2Component } from './faq2.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    Faq2Component
  ],
  imports: [
    CommonModule,
    Faq2RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Faq2Module { }
