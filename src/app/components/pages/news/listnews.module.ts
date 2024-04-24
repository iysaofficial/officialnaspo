import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { listnewsRoutingModule } from './listnews-routing.module';
import { ListNewsComponent } from './listnews.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListNewsComponent
  ],
  imports: [
    CommonModule,
    listnewsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListNewsModule { }
