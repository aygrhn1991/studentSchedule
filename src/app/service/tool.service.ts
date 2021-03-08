import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(public toastController: ToastController) { }

  async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'middle',
      translucent: true,
      color: 'dark',
      duration: 2000
    });
    toast.present();
  }

}
