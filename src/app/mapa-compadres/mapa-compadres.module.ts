import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaCompadresPageRoutingModule } from './mapa-compadres-routing.module';

import { MapaCompadresPage } from './mapa-compadres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaCompadresPageRoutingModule
  ],
  declarations: [MapaCompadresPage]
})
export class MapaCompadresPageModule {}
