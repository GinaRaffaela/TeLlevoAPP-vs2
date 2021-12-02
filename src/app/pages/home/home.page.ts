import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController, ModalController } from '@ionic/angular';
import { ApiUsers } from 'src/app/services/api-users.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  userId: any;
  userName: any;
  // eslint-disable-next-line max-len
  constructor(
    private apiUsers: ApiUsers,
    private alertController: AlertController,
    private router: Router,
    private modalController: ModalController,
    private activeroute: ActivatedRoute,
    private alertCtrl: AlertController) {
  }

  ionViewWillEnter() { // al hacer la pagina home visible, consultamos la api por los datos del userId almacenado en localStorage
    this.userId = localStorage.getItem('userId');
    this.apiUsers.getUser(this.userId).subscribe({
      next: (res) => { this.userName = res.name; }, // almacenamos el dato del nombre de usuario y luego lo mostramos en el html
      error: (error) => { console.log(error); },
      complete: () => console.log('User data retrieved')
    });
  }

  async salir() { // salir vacia el local storage
    const alert = await this.alertCtrl.create({
      message: '¿Desea salir de la aplicacion?',
      buttons: [{
        text: 'Cancelar'
      }, {
        text: 'Aceptar',
        handler: () => {
          this.router.navigate(['/login']);
          localStorage.clear();
        }
      }]
    });
    await alert.present();
  }

  pasajero() {
    this.router.navigate(['/pasajero']);
  }

  conductor() {
    this.router.navigate(['/conductor']);
  }

  oops() {
    this.router.navigate(['/not-found']);
  }
}
