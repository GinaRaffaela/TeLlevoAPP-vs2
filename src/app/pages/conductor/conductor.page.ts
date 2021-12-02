import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {


  
  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    
  }


  async salir() {
    const alert = await this.alertCtrl.create({
      message: '¿Desea salir de la aplicacion?',
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Aceptar',
        handler: () => {
        this.router.navigate(['/login']);}
    }]
  });
    await alert.present();
  }
  
  atras(){
    this.router.navigate(['/home']);
  }

  


}


