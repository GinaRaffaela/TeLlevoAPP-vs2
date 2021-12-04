import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ViajeService } from 'src/app/services/viaje.service';


@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.scss'],
})
export class CrearViajeComponent implements OnInit {

  constructor(private router: Router, private viaje: ViajeService, public alertCtrl: AlertController, public loadingController:LoadingController) { }

  ngOnInit() {}

  async agregar(txtSede:HTMLSelectElement, txtDestino:HTMLInputElement, txtTarifa:HTMLInputElement, txtPasajero:HTMLInputElement, txtHora:HTMLInputElement, txtPatente:HTMLInputElement){
    const datos = [{"Origen": txtSede.value,
                    "Destino": txtDestino.value,
                    "Tarifa": txtTarifa.value,
                    "Pasajero": txtPasajero.value,
                    "Hora": txtHora.value,
                    "Patente": txtPatente.value,
    }]
    
    await this.viaje.agregar(datos);
    this.presentLoadingWithOptions() 
    this.router.navigate(['/home']);
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Viaje',
      message: 'Su viaje ha sido publicado con exito',
      buttons: ['OK']
      
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: "circles",
      duration: 5000,
      message: 'Publicando viaje...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
   await loading.present();
   const { role, data } = await loading.onDidDismiss();
   this.presentAlert()
   return;
    
   }

  atras(){
    this.router.navigate(['/home']);
  }
  
}
