import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiUsers } from '../../services/api-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  user: any = {
    usuario: '',
    pass: ''
  };
  db: any;
  usuario: any;
  password: any;
  auth: any;
  userId: any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private apiUsers: ApiUsers) { }

  async ingresar() {
    this.usuario = this.user.usuario;
    this.password = this.user.pass;

    this.apiUsers.getUsers().subscribe({ //Llamado a la api
      next: (res) => {
        this.db = res;
        if (this.db.find(e => { // validación de datos ingresados
          if (e.user === this.usuario) {
            if (e.password === this.password) {
              this.userId = e.id;
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        })) {
          this.auth = true; // variable de autorización
        } else { // En caso de que la autorización sea falsa
          this.auth = false;
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: async () => {
        if (this.auth === true) { // en caso de que la autorización se true guardamos localStorage y llamamo a la pag home
          localStorage.setItem('authentication', '1');
          localStorage.setItem('userId', this.userId);
          this.router.navigate(['/home']);
        } else { // en caso de que la autorización sea false, mostramos mensaje
          console.log('user not found');
          const alert = await this.alertController.create({
            header: 'El usuario no existe',
            message: 'El usuario ingresado no se encuentra en nuestra base de datos.',
            buttons: ['Aceptar']
          });

          await alert.present();
          return;
        }
      }
    });
  }

  recuperar() {
    this.router.navigate(['/restore']);
  }

}
