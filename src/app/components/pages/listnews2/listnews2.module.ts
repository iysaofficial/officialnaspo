import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { listnews2RoutingModule } from './listnews2-routing.module';
import { ListNews2Component } from './listnews2.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListNews2Component
  ],
  imports: [
    CommonModule,
    listnews2RoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListNews2Module { }
