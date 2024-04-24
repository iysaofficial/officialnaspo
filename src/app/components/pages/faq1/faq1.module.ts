import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Faq1RoutingModule } from './faq1-routing.module';
import { Faq1Component } from './faq1.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    Faq1Component
  ],
  imports: [
    CommonModule,
    Faq1RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Faq1Module { }
