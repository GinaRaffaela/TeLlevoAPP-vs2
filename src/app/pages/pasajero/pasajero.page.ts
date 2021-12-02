import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
  user: any;
  map=null;

  constructor(public alertCtrl: AlertController, private router: Router, public loadingController:LoadingController, private activeroute:ActivatedRoute) { 
    
  }

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

  
  

