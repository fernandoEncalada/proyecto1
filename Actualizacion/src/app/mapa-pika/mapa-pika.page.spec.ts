import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaPikaPage } from './mapa-pika.page';

describe('MapaPikaPage', () => {
  let component: MapaPikaPage;
  let fixture: ComponentFixture<MapaPikaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaPikaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaPikaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
