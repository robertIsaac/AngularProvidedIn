import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature-one',
    loadChildren: () => import('./feature-one/feature-one.module').then(m => m.FeatureOneModule),
  },
  {
    path: 'feature-two',
    loadChildren: () => import('./feature-two/feature-two.module').then(m => m.FeatureTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
