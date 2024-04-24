import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { BlockComponent } from './block/block.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { VideoComponent } from './Video/video.components';
import { NewsletterOneComponent } from './Newsletter/newsletter.component';
import { PageCtaComponent } from './page-cta/page-cta.component';


@NgModule({
  declarations: [
    HomeTwoComponent,
    BannerComponent,
    VideoComponent,
    BlockComponent,
    PartnersComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    SearchFormComponent,
    FaqsComponent,
    NewsletterOneComponent,
    BlogsComponent,
    PageCtaComponent
  ],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class HomeTwoModule { }
