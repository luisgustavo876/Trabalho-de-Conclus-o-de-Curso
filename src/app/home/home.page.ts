import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { AnimationController } from '@ionic/angular';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(
    public crudService:CrudService
  ) {
    
    console.log(moment.locale());
    this.data_atual = moment().format('MMMM DD YYYY, h:mm:ss a');
    this.setQuinzena();
    this.setDia();

    this.crudService.fetchAll('dados')
    .then(response => {
      // console.log(response);
    });
  }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  dados = {
    quinzena: null,
    data:{
      dia: '',
      mes: '',
      ano: '',
    },
    funcionarios:[
      { nome:'Henrique' },
      { nome:'Cristiano' },
      { nome:'luis' },
      { nome:'marcelo' },
      { nome:'pedro' },
      { nome:'joao' },
      { nome:'fabiano' },
      { nome:'douglas' },
    ],
    sitios:[
      { 
        nome:'matao' , 
        quadras: [
          {
            numero:1, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
            ],
          },
          {
            numero:2, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },

            ],
          },
          {
            numero:3, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
            ],
          },
          {
            numero:4, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
            ],
          },
          {
            numero:5, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
              { numero:11 },
              { numero:12},
              { numero:13},
              { numero:14},
              { numero:15},
            ],
          },{
            numero:6, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
            ],
          },{
            numero:7, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },

            ],
          },
        ]
      },
      { 
        nome:'primavera' , 
        quadras: [
          {
            numero:1, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
            ],
          },
          {
            numero:2, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
          ],},
          {
            numero:3, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
            ],
          },
          {
            numero:4, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
            ],
          },
          {
            numero:5, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
              { numero:11 },
            ],
          },
          {
            numero:6, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
            ],
          },
        ]
      },

      { 
        nome:'vileiro' , 
        quadras: [
          {
            numero:1, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
            ],
          },
          {
            numero:2, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
          ],},
          {
            numero:3, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
            ],
          },
          {
            numero:4, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
            ],
          },
          {
            numero:5, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
              { numero:11 },
            ],
          },
          {
            numero:6, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
            ],
          },
        ]
      },

      { 
        nome:'acacia' , 
        quadras: [
          {
            numero:1, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
            ],
          },
          {
            numero:2, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
          ],},
          {
            numero:3, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
            ],
          },
          {
            numero:4, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
            ],
          },
          {
            numero:5, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
              { numero:11 },
            ],
          },
          {
            numero:6, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
            ],
          },
        ]
      },

      { 
        nome:'enxovia' , 
        quadras: [
          {
            numero:1, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
            ],
          },
          {
            numero:2, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
          ],},
          {
            numero:3, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
            ],
          },
          {
            numero:4, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
            ],
          },
          {
            numero:5, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
              { numero:11 },
            ],
          },
          {
            numero:6, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
            ],
          },
        ]
      },

      { 
        nome:'sta-lucia' , 
        quadras: [
          {
            numero:1, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
            ],
          },
          {
            numero:2, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
          ],},
          {
            numero:3, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
            ],
          },
          {
            numero:4, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
            ],
          },
          {
            numero:5, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
              { numero:11 },
            ],
          },
          {
            numero:6, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
            ],
          },
        ]
      },

      { 
        nome:'bela-vista' , 
        quadras: [
          {
            numero:1, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
            ],
          },
          {
            numero:2, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
          ],},
          {
            numero:3, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
            ],
          },
          {
            numero:4, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
            ],
          },
          {
            numero:5, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
              { numero:11 },
            ],
          },
          {
            numero:6, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
            ],
          },
        ]
      },
      { 
        nome:'nsa ' , 
        quadras: [
          {
            numero:1, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
            ],
          },
          {
            numero:2, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
          ],},
          {
            numero:3, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
            ],
          },
          {
            numero:4, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
            ],
          },
          {
            numero:5, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
              { numero:8 },
              { numero:9 },
              { numero:10 },
              { numero:11 },
            ],
          },
          {
            numero:6, 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
            ],
          },
          {
            numero:7 , 
            ramal:[
              { numero:1 },
              { numero:2 },
              { numero:3 },
              { numero:4 },
              { numero:5 },
              { numero:6 },
              { numero:7 },
            ],
          },
        ]
      },
    ],

    producao:{
      cortes:[
        { nome:'N'},
        { nome:'V'},
        { nome:'F'},
      ],
      Arvores: [
        { quantidade: '' },
      ],
      
      atividade_diaria:[
        { nome:'Levantamento'},
        { nome:'Risco'},
        { nome:'Risco Instalação'},
        { nome:'Instalação Completa'},
        { nome:'Diária Revisão'},
        { nome:'Levantamento'},
        { nome:'Coleta' },
        { nome:'Diária Normal'},
        { nome:'Diária Chuva'},
        { nome:'Diária Feriado'},
        { nome:'Levantamento'},
        { nome:'Raspa B'},
        { nome:'Raspa N'},
        { nome:'Raspa V'},
        { nome:'Carregamento'},
        { nome:'Falta Justificativa'},
        { nome:'Falta'},
      ]
    }
  }

  quantidadeArvores: any;
  producao:any
  sitio_selecionado: any;
  quadra_selecionada:any;
  funcionario_selecionado:any;

  dados_do_usuario: any;
  data_atual: any;
  data = {
    dia: moment().format('DD'),
    mes: moment().format('MMMM'),
    ano: moment().format('YYYY'),
  };
  dia: any;
  Quinzena: any;

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    setQuadra(event: any) {
      this.quadra_selecionada = event.detail.value;
      console.log('Quadra selecionada:', this.quadra_selecionada);
    }
    
    setSitio(event: any) {
      this.sitio_selecionado = event.detail.value;
      console.log('Sitio selecionado:', this.sitio_selecionado);
    }
    
    setProducao(event: any) {
      this.producao = event.detail.value;
      console.log('Produção selecionada:', this.producao);
    }

    setFuncionario(event:any) {
      this.funcionario_selecionado = event.detail.value;
    }
    

  salvar() {
    this.crudService.insert(this.dados, 'DADOS');
  }

  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  anteriorQuinzena() {
    let diaAtual = Number(this.data.dia);

    if (diaAtual <= 15) {
      this.data.dia = '16';
      this.data.mes = moment(this.data.mes, 'MMMM').subtract(1, 'months').format('MMMM');
    } else {
      this.data.dia = '1';
    }

    this.setQuinzena();
    this.setDia();
  }

  proximaQuinzena() {
    let diaAtual = Number(this.data.dia);

    if (diaAtual <= 15) {
      this.data.dia = '16';
    } else {
      this.data.dia = '1';
      this.data.mes = moment(this.data.mes, 'MMMM').add(1, 'months').format('MMMM');
    }

    this.setQuinzena();
    this.setDia();
  }

  setQuinzena() {
    let Quinzena = '1°';

    if (Number(this.data.dia) > 15) {
      Quinzena = '2°';
    }

    this.Quinzena = Quinzena + ' Quinzena ' + this.data.mes;
  }

  proximoDia() {
    const diaAtual = Number(this.data.dia);
    const ultimoDiaDoMes = moment(this.data.mes, 'MMMM').daysInMonth();

    if (diaAtual < ultimoDiaDoMes) {
      this.data.dia = String(diaAtual + 1);
    } else {
      this.data.dia = '1';
      this.data.mes = moment(this.data.mes, 'MMMM').add(1, 'months').format('MMMM');
    }

    this.setQuinzena();
    this.setDia();
  }

  anteriorDia() {
    let diaAtual = Number(this.data.dia);

    if (diaAtual > 1) {
      this.data.dia = String(diaAtual - 1);
    } else {
      const diaAnterior = moment(this.data.mes, 'MMMM').subtract(1, 'months').endOf('month').format('DD');
      this.data.dia = diaAnterior;
      this.data.mes = moment(this.data.mes, 'MMMM').subtract(1, 'months').format('MMMM');
    }

    this.setDia();
    this.setQuinzena();
  }
  setDia() {
    this.dia = 'Dia ' + this.data.dia;
    this.dados.quinzena=this.Quinzena;
    this.dados.data = this.data;
  }
  
  abrirCalendario() {
  }

}

  // criarDados(){
  //   const item = {
  //     "nome": "Miranata",
  //     "sobrenome": "Filoxina",
  //     "telefone": [
  //       123,
  //       321,
  //       999
  //     ],
  //     "habilidades": [
  //       {nome: "jogar futebol"},
  //       {nome: "jogar airsoft"}
  //     ]
  //   };

  //   fetch('https://us-central1-tcc-ofc.cloudfunctions.net/app/diogo/read',
  //   {
  //     method: 'GET'
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response);
  //     this.dados_do_usuario = response;
  //   })
  //   .catch(erro => {
  //     console.log(erro);
  //   })
  //   .finally(()=> {
  //     console.warn('Finalizado');
  //   })
  // }