import { TestBed } from '@angular/core/testing';

import { ViajeService } from './viaje.service';

import { Storage } from '@ionic/storage';

describe('ViajeService', () => {
  let service: ViajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: Storage 
      }]
    });
    service = TestBed.inject(ViajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
