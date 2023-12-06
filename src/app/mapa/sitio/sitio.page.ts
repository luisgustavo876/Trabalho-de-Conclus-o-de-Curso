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
    'vileiro',
    'acacia',
    'enxovia',
    'matao',
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


  async abrirSelectQuadraMatao() {
    this.mostrarOpcoesQuadras = false;
    const alert = await this.alertCtrl.create({
      header: 'Selecione uma Quadra',
      inputs: this.quadrasComRamaisMatao.map((quadra) => ({
        type: 'radio',
        label: quadra.quadra,
        value: quadra.quadra,
        checked: quadra.quadra === this.quadraSelecionada,
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
              this.mostrarOpcoesQuadras = true; // Mostra novamente as opções de quadras primavera ou outros sítios
              // Implemente a lógica para tratar a seleção da quadra 'matao' aqui, se necessário.
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async abrirSelectQuadraVileiro() {
    this.mostrarOpcoesQuadras = false; // Oculta as opções de quadras primavera ou outros sítios

    const alert = await this.alertCtrl.create({
      header: 'Selecione uma Quadra',
      inputs: this.quadrasVileiro.map((quadra) => ({
        type: 'radio',
        label: quadra,
        value: quadra,
        checked: this.quadraSelecionada === quadra,
      })),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: (selectedQuadra) => {
            this.quadraSelecionada = selectedQuadra;
          },
        },
      ],
    });

    await alert.present();
  }

  selecionarQuadraMatao() {
    // Implemente a lógica para tratar a seleção da quadra 'matao'
  }


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
    'Quadra 9',
  ]; 

  quadrasMatao: string[] = [
    'Quadra 1',
    'Quadra 2', 
    'Quadra 3',
    'Quadra 4',
    'Quadra 5',
    'Quadra 6',
    'Quadra 7',
  ]; 

  quadrasVileiro: string[] = [
    'Quadra 1',
    'Quadra 2', 
    'Quadra 3',
    'Quadra 4',
    'Quadra 5',
  ];



  quadrasComRamaisPrimavera = [
    {
      quadra: 'Quadra 1',
      ramais: [
        { valorN: '44', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '55', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '66', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '22' },
        { valorN: '', valorV: '98', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
      ],
    
    },
    {
      quadra: 'Quadra 2',
      ramais: [
        { valorN: '', valorV: '16', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '77', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '100', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '13', valorV: '', valorF: '11' },
      ],
    },
    {
      quadra: 'Quadra 3',
      ramais: [
        { valorN: '11', valorV: '', valorF: '' },
        { valorN: '64', valorV: '46', valorF: '84' },
        { valorN: '32', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '77', valorF: '' },
      ],
    },
    {
      quadra: 'Quadra 4',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
      ],
    },
    {
      quadra: 'Quadra 5',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
      ],
    },
    {
      quadra: 'Quadra 6',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
      ],
    },
    {
      quadra: 'Quadra 7',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 8',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
      ],
    },
    {
      quadra: 'Quadra 9',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
  ];

  quadrasComRamaisMatao = [
    {
      quadra: 'Quadra 1',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '22', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '44' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 2',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 3',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
      ],
    },
    {
      quadra: 'Quadra 4',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 5',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '55', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 6',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 7',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
  ];

  quadrasComRamaisVileiro = [
    {
      quadra: 'Quadra 1',
      ramais: [
        { valorN: '12', valorV: '15', valorF: '44' },
        { valorN: '22', valorV: '55', valorF: '77' },
        { valorN: '23', valorV: '76', valorF: '11' },
        { valorN: '22', valorV: '25', valorF: '15' },
        { valorN: '11', valorV: '14', valorF: '43' },
        { valorN: '33', valorV: '79', valorF: '18' },
        { valorN: '24', valorV: '36', valorF: '44' },
        { valorN: '84', valorV: '44', valorF: '58' },
        { valorN: '22', valorV: '33', valorF: '22' },
        { valorN: '11', valorV: '22', valorF: '12' },

      ],
    },
    {
      quadra: 'Quadra 2',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 3',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
      ],
    },
    {
      quadra: 'Quadra 4',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 5',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '55', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 6',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
    {
      quadra: 'Quadra 7',
      ramais: [
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },
        { valorN: '', valorV: '', valorF: '' },

      ],
    },
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

