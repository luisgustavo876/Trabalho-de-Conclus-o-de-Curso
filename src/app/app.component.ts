import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private alertController: AlertController,
    private router: Router) {}
  
  isDayMode: boolean = true;
  isSunVisible: boolean = true;
  isMoonVisible: boolean = false;
  rotateClockwise: boolean = false;
  rotateCounterclockwise: boolean = false;
  sunSmall: boolean = false; // Controla o tamanho do sol
  moonSmall: boolean = false; // Controla o tamanho da lua
  
  // ion-segmente evento de troca ///////////////////////////////////////////////////////////////////  

  guia:any = 'all';
  trocar(event:any){
    console.log(event.detail.value)
    this.guia=event.detail.value
  }

  TrocaTema() {
    this.isDayMode = !this.isDayMode;

    if (this.isDayMode) {
      document.body.setAttribute('color-theme', 'light');
    } else {
      document.body.setAttribute('color-theme', 'dark');
    }

    if (this.isSunVisible) {
      this.rotateClockwise = true;
      this.sunSmall = true;

      setTimeout(() => {
        this.isSunVisible = false;
        this.isMoonVisible = true;
        this.sunSmall = false;
        this.rotateClockwise = false;
      }, 500);
    } else {
      this.rotateCounterclockwise = true;
      this.moonSmall = true;

      setTimeout(() => {
        this.isSunVisible = true;
        this.isMoonVisible = false;
        this.moonSmall = false;
        this.rotateCounterclockwise = false;
      }, 500);
    }
  }
  
  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Você tem certeza que deseja ir para a página de destino?',
      buttons: [
        {
          text: '',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['landing']);
          },
        },
      ],
    });

    await alert.present();
  }
  alertButtons = [
    {
      text: 'No',
      role: 'cancel',
    },
    {
      text: 'Yes',
      handler: () => {
        this.router.navigate(['landing']);
      },
    },
  ];

}

