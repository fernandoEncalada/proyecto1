import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaCompadresPage } from './mapa-compadres.page';

describe('MapaCompadresPage', () => {
  let component: MapaCompadresPage;
  let fixture: ComponentFixture<MapaCompadresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaCompadresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaCompadresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
