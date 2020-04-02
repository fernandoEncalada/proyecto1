import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaCongresoPageRoutingModule } from './mapa-congreso-routing.module';

import { MapaCongresoPage } from './mapa-congreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaCongresoPageRoutingModule
  ],
  declarations: [MapaCongresoPage]
})
export class MapaCongresoPageModule {}
