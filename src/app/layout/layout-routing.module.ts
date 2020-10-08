import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'pipeline', pathMatch: 'full' },
      { path: '/', redirectTo: 'pipeline', pathMatch: 'full' },      
      { path: 'pipeline',  loadChildren: () => import('./pipeline/pipeline.module').then(m => m.PipelineModule) },      
      { path: 'close_won', loadChildren: () => import('./close-won/close-won.module').then(m => m.CloseWonModule) },
      { path: 'loss_analysis', loadChildren: () => import('./loss-analysis/loss-analysis.module').then(m => m.LossAnalysisModule) },      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
