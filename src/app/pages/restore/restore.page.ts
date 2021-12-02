import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {

  usuario: any;

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }
  
  async recuperar(){
    if (this.usuario == null){
      const toast = await this.toastController.create({
        message: 'Debe ingresar su usuario',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
      return;
      
    } 

    else {
      this.router.navigate(['/login']);
      const toast = await this.toastController.create({
        message: 'Su contraseña ha sido reestablecida con exito',
        position: 'bottom',
        duration: 2000
      });
      await toast.present();
    }

  }

  

}
