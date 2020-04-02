import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaAbduccionPage } from './mapa-abduccion.page';

describe('MapaAbduccionPage', () => {
  let component: MapaAbduccionPage;
  let fixture: ComponentFixture<MapaAbduccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaAbduccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaAbduccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
