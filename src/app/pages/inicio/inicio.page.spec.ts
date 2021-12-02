import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Inicio } from './inicio.page';

import { RouterTestingModule } from '@angular/router/testing';

describe('InicioSplashscreenPage', () => {
  let component: Inicio;
  let fixture: ComponentFixture<Inicio>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Inicio ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Inicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
