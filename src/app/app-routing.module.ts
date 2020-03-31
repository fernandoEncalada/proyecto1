import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },

  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },

  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
 
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./tab6/tab6.module').then( m => m.Tab6PageModule)
  },
  {
    path: 'tab7',
    loadChildren: () => import('./tab7/tab7.module').then( m => m.Tab7PageModule)
  },
  {
    path: 'tab8',
    loadChildren: () => import('./tab8/tab8.module').then( m => m.Tab8PageModule)
  },
  {
    path: 'tab9',
    loadChildren: () => import('./tab9/tab9.module').then( m => m.Tab9PageModule)
  },
  {
    path: 'tab10',
    loadChildren: () => import('./tab10/tab10.module').then( m => m.Tab10PageModule)
  },
  {
    path: 'tab11',
    loadChildren: () => import('./tab11/tab11.module').then( m => m.Tab11PageModule)
  },
  {
    path: 'mapa-roto',
    loadChildren: () => import('./mapa-roto/mapa-roto.module').then( m => m.MapaRotoPageModule)
  },
  {
    path: 'mapa-cuenca',
    loadChildren: () => import('./mapa-cuenca/mapa-cuenca.module').then( m => m.MapaCuencaPageModule)
  },
  {
    path: 'mapa-abduccion',
    loadChildren: () => import('./mapa-abduccion/mapa-abduccion.module').then( m => m.MapaAbduccionPageModule)
  },
  {
    path: 'mapa-pika',
    loadChildren: () => import('./mapa-pika/mapa-pika.module').then( m => m.MapaPikaPageModule)
  },
  {
    path: 'mapa-compadres',
    loadChildren: () => import('./mapa-compadres/mapa-compadres.module').then( m => m.MapaCompadresPageModule)
  },
  {
    path: 'mapa-congreso',
    loadChildren: () => import('./mapa-congreso/mapa-congreso.module').then( m => m.MapaCongresoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
