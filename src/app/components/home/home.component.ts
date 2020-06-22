import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { AlertController, ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'MyIonicDemo';
  message: string =  null;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public modalController: ModalController
  ){}

  async displayAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    // then
    await alert.present();
    // then
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    await modal.present();
    const {data = null} = await modal.onDidDismiss();
    console.log(data);
    this.message = data;
  }
}
