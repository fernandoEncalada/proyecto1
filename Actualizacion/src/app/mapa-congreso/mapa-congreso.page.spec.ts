import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaCongresoPage } from './mapa-congreso.page';

describe('MapaCongresoPage', () => {
  let component: MapaCongresoPage;
  let fixture: ComponentFixture<MapaCongresoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaCongresoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaCongresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
