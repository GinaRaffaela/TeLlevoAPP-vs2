import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasajeroPage } from './pasajero.page';

import { RouterTestingModule } from '@angular/router/testing';

describe('PasajeroPage', () => {
  let component: PasajeroPage;
  let fixture: ComponentFixture<PasajeroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasajeroPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
