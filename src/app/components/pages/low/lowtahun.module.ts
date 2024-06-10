import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { lowtahunRoutingModule } from './lowtahun-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LowtahunComponent } from './lowtahun.component';


@NgModule({
  declarations: [
    LowtahunComponent
  ],
  imports: [
    CommonModule,
    lowtahunRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class lowtahunModule { }
