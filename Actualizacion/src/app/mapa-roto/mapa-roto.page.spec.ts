import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaRotoPage } from './mapa-roto.page';

describe('MapaRotoPage', () => {
  let component: MapaRotoPage;
  let fixture: ComponentFixture<MapaRotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaRotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaRotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
