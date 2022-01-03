import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { FeatureOneComponent } from './feature-one.component';
import { BarService } from './bar.service';


@NgModule({
  declarations: [
    FeatureOneComponent,
  ],
  imports: [
    CommonModule,
    FeatureOneRoutingModule,
  ],
  providers: [
    BarService,
  ],
})
export class FeatureOneModule {
}
