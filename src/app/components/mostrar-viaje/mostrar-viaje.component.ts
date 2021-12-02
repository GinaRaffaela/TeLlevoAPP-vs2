import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { ViajeService } from 'src/app/services/viaje.service';


@Component({
  selector: 'app-mostrar-viaje',
  templateUrl: './mostrar-viaje.component.html',
  styleUrls: ['./mostrar-viaje.component.scss'],
})
export class MostrarViajeComponent implements OnInit {

  user: any;
  listado=[];

  constructor(private emailComposer: EmailComposer, private viaje: ViajeService, public alertCtrl: AlertController, private router: Router, public loadingController:LoadingController, private activeroute:ActivatedRoute) { 

  }

  ngOnInit() {}

  async list() {
    this.listado = this.viaje.listar();
  }

  solicitar(){
    this.presentLoadingWithOptions() 
    this.router.navigate(['/home']);
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Solicitud de viaje',
      message: 'Usted ha reservado un viaje con exito',
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
      message: 'Solicitando viaje...',
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

  correo(){
    let email = {
     to: 'g.gaggero@duocuc.cl',
     cc: '',
     attachments: [],
     subject: 'Reserva de viaje',
     body: 'Usted ha reservado un viaje en TeLlevoAPP',
     isHtml: true
    }
    this.emailComposer.open(email);
}
}
