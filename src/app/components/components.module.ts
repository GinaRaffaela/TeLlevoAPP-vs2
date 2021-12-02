import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MapboxComponent } from './mapbox/mapbox.component';
import { CrearViajeComponent } from './crear-viaje/crear-viaje.component';
import { MostrarViajeComponent } from './mostrar-viaje/mostrar-viaje.component';


@NgModule({
  declarations: [
    MapboxComponent,
    CrearViajeComponent,
    MostrarViajeComponent
    
  ],
  exports: [
    MapboxComponent,
    CrearViajeComponent,
    MostrarViajeComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }