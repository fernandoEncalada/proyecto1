import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaCuencaPage } from './mapa-cuenca.page';

describe('MapaCuencaPage', () => {
  let component: MapaCuencaPage;
  let fixture: ComponentFixture<MapaCuencaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaCuencaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaCuencaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
