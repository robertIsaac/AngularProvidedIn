import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureTwoRoutingModule } from './feature-two-routing.module';
import { FeatureTwoComponent } from './feature-two.component';
import { BazService } from './baz.service';


@NgModule({
  declarations: [
    FeatureTwoComponent,
  ],
  imports: [
    CommonModule,
    FeatureTwoRoutingModule,
  ],
  providers: [
    BazService,
  ],
})
export class FeatureTwoModule {
}
