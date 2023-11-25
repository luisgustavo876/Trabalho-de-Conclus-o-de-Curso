import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sitio',
  templateUrl: 'sitio.page.html',
  styleUrls: ['sitio.page.scss'],
})
export class SitioPage implements OnInit {
  sitios: string[] = [
    'primavera',
    'matao',
    'vileiro',
    'acacia',
    'enxovia',
    'sta-lucia',
    'bela-vista',
    'nsa',
  ];
  mostrarSegmentQuadra: boolean = false; 
  mostrarSegment: boolean = false;
  sitioSelecionado: string = '';
  quadraSelecionada: string = 'Quadra 1'; 
  indiceSitio: number = 0;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {
    this.sitioSelecionado = this.sitios[0];
  }

  ramais: string[] = [];

ngOnInit() {
  // Inicialize o array de ramais com 12 elementos vazios
  for (let i = 0; i < 12; i++) {
    this.ramais.push('');
  }
}



sitioAnterior() {
    this.indiceSitio--;
    if (this.indiceSitio < 0) {
      this.indiceSitio = this.sitios.length - 1;
    }
    this.sitioSelecionado = this.sitios[this.indiceSitio];
  }

  proximoSitio() {
    this.indiceSitio++;
    if (this.indiceSitio >= this.sitios.length) {
      this.indiceSitio = 0;
    }
    this.sitioSelecionado = this.sitios[this.indiceSitio];
  }

  selecionarSitio() {
    console.log('sitioSelecionado:', this.sitioSelecionado);
  }

  async abrirSelect() {
    const alert = await this.alertCtrl.create({
      header: 'Selecione um Sítio',
      inputs: this.sitios.map((sitio) => ({
        type: 'radio',
        label: sitio,
        value: sitio,
        checked: sitio === this.sitioSelecionado,
      })),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            if (data) {
              this.sitioSelecionado = data;
              // Implemente a lógica para tratar a seleção do sítio aqui
              // Por exemplo, atualizar os dados da quadra e árvores com base no sítio selecionado
            }
          },
        },
      ],
    });

    await alert.present();
  }

  

 selecionarQuadra() {
    console.log('quadraSelecionada:', this.quadraSelecionada);
  }

  async abrirSelectQuadraPrimavera() {
    const alert = await this.alertCtrl.create({
      header: 'Selecione uma Quadra',
      inputs: this.quadrasPrimavera.map((quadra) => ({
        type: 'radio',
        label: quadra,
        value: quadra,
        checked: quadra === this.quadraSelecionada,
      })),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            if (data) {
              this.quadraSelecionada = data;
              // Implemente a lógica para tratar a seleção da quadra aqui, se necessário.
            }
          },
        },
      ],
    });
  
    await alert.present();
  }
  
  valorN: string = '';
  valorV: string = '';
  valorF: string = '';
  valorSECA: string = '';


  mostrarOpcoesQuadras: boolean = true;

  quadrasPrimavera: string[] = [
    'Quadra 1',
    'Quadra 2', 
    'Quadra 3',
    'Quadra 4',
    'Quadra 5',
    'Quadra 6',
    'Quadra 7',
    'Quadra 8',
    'Quadra 9'
  ]; 

  quadrasComRamaisPrimavera = [
    {
      quadra: 'Quadra 1',
      ramais: Array(12).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 2',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 3',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 4',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 5',
      ramais: Array(21).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 6',
      ramais: Array(10).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 7',
      ramais: Array(3).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 8',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 9',
      ramais: Array(14).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
  ];

  quadrasComRamaisMatao = [
    {
      quadra: 'Quadra 1',
      ramais: Array(12).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 2',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 3',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 4',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 5',
      ramais: Array(21).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 6',
      ramais: Array(10).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 7',
      ramais: Array(3).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 8',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 9',
      ramais: Array(14).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    // Adicione mais quadras com a estrutura correspondente se necessário.
  ];

  quadrasComRamaisVileiro = [
    {
      quadra: 'Quadra 1',
      ramais: Array(12).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 2',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 3',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 4',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 5',
      ramais: Array(21).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 6',
      ramais: Array(10).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 7',
      ramais: Array(3).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 8',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 9',
      ramais: Array(14).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    // Adicione mais quadras com a estrutura correspondente se necessário.
  ];

  quadrasComRamaisAcacia = [
    {
      quadra: 'Quadra 1',
      ramais: Array(12).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 2',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 3',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 4',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 5',
      ramais: Array(21).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 6',
      ramais: Array(10).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 7',
      ramais: Array(3).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 8',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 9',
      ramais: Array(14).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    // Adicione mais quadras com a estrutura correspondente se necessário.
  ];

  quadrasComRamaisEnxovia = [
    {
      quadra: 'Quadra 1',
      ramais: Array(12).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 2',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 3',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 4',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 5',
      ramais: Array(21).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 6',
      ramais: Array(10).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 7',
      ramais: Array(3).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 8',
      ramais: Array(6).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    {
      quadra: 'Quadra 9',
      ramais: Array(14).fill({
        valorN: '',
        valorV: '',
        valorF: '',
        valorSECA: '',
      }),
    },
    // Adicione mais quadras com a estrutura correspondente se necessário.
  ];


}

