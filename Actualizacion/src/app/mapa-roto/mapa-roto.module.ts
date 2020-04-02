import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaRotoPageRoutingModule } from './mapa-roto-routing.module';

import { MapaRotoPage } from './mapa-roto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaRotoPageRoutingModule
  ],
  declarations: [MapaRotoPage]
})
export class MapaRotoPageModule {}
