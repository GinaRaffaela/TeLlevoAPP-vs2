import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearViajeComponent } from './crear-viaje.component';

import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage';

describe('CrearViajeComponent', () => {
  let component: CrearViajeComponent;
  let fixture: ComponentFixture<CrearViajeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearViajeComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [{
        provide: Storage 
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
