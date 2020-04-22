import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'conversion',
    loadChildren: () => import('./modules/conversion/conversion.module').then(m => m.ConversionModule)
  },
  {
    path: '',
    redirectTo: 'conversion',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
