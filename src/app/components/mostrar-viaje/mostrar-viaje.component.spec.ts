import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarViajeComponent } from './mostrar-viaje.component';

import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage';

describe('MostrarViajeComponent', () => {
  let component: MostrarViajeComponent;
  let fixture: ComponentFixture<MostrarViajeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarViajeComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [{
        provide: Storage 
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
