      import { Component, OnInit } from '@angular/core';
      import * as moment from 'moment';
      import { AlertController } from '@ionic/angular';
      import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
      import { CrudService } from '../services/crud.service';


      @Component({
        selector: 'app-funcionarios',
        templateUrl: './funcionarios.page.html',
        styleUrls: ['./funcionarios.page.scss'],
      })
      export class FuncionariosPage  {

        constructor(
          public crudService:CrudService,
          private formBuilder: FormBuilder,
          private alertCtrl: AlertController,
          )
        {
          this.data_atual = moment().format('MMMM DD YYYY, h:mm:ss a');
          this.setQuinzena();
          this.getDados();
          this.getFuncionarios();
        }

        data_atual: any;
        data = {
          dia: moment().format('DD'),
          mes: moment().format('MMMM'),
          ano: moment().format('YYYY'),
        };
        
        isLoading: boolean = false;
        Quinzena: any;
        totalFaltas: any;
        totalFaltaJustificativa: any;
        totalFrete: any;
        selectedQuinzena: string = 'quinzena1';
        isModalOpen = false; 
        
        mostrarSegmentFuncionario: boolean = false; //isso aq esconde o seletor de funcinario

        dados: any[] = [];
        funcionarios: any[] = [];
        funcionarioSelecionado: any;

        getDados() {
          const remoteCollectionName = 'DADOS';
          this.crudService.fetchAll(remoteCollectionName)

            .then((dados) => {
              this.dados = dados; 
              console.log(dados);
            })
            .catch((error) => {
              console.error('Erro ao obter funcionários:', error);
            })
        }

        getFuncionarios() {
          const remoteCollectionName = 'DADOS';
      
          this.crudService.fetchAll(remoteCollectionName)
            .then((funcionarios: any[]) => {
              this.funcionarios = funcionarios;
              console.log(this.funcionarios);
              this.funcionarioSelecionado = this.funcionarios[0];
            })
            .catch((error) => {
              console.error('Erro ao obter nomes de funcionários:', error);
            });
        }

        anteriorQuinzena() {
          let diaAtual = Number(this.data.dia);

          if (diaAtual <= 15) {
            this.data.dia = '16';
            this.data.mes = moment(this.data.mes, 'MMMM').subtract(1, 'months').format('MMMM');
          } else {
            this.data.dia = '1';
          }

          this.setQuinzena();
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
        }

        setQuinzena() {
          let Quinzena = '1°';

          if (Number(this.data.dia) > 15) {
            Quinzena = '2°';
          }

          this.Quinzena = Quinzena + ' Quinzena ' + this.data.mes;
        }

        setOpen(isOpen: boolean) {
          this.isModalOpen = isOpen;
        }

        selecionarFuncionario() {
          console.log('Funcionário selecionado:', this.funcionarioSelecionado);
        }

        async abrirSelectFuncionario() {
          const alert = await this.alertCtrl.create({
            header: 'Selecione um Funcionário',
            inputs: this.funcionarios.map((funcionario) => ({
              type: 'radio',
              label: funcionario,
              value: funcionario,
              checked: funcionario === this.funcionarioSelecionado,
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
                    this.funcionarioSelecionado = data;
                  }
                },
              },
            ],
          });
        
          await alert.present();
        }
  
        saveData() {
          console.log('Dados a serem salvos:', this.Atividades);
          this.setOpen(false);
        }

        ionViewWillEnter() {
          this.calcularTotais();
        }

        calcularTotais() {

          const totalFaltas = this.Atividades
            .filter(atividade => atividade.name === 'Falta')
            .reduce((total, atividade) => total + atividade.value, 0);

          const totalFrete = this.Atividades
            .filter(atividade => atividade.name === 'Frete')
            .reduce((total, atividade) => total + atividade.value, 0);

          const totalFaltaJustificativa = this.Atividades
            .filter(atividade => atividade.name === 'Falta Justificativa')
            .reduce((total, atividade) => total + atividade.value, 0);

          this.totalFaltas = totalFaltas;
          this.totalFrete = totalFrete;
          this.totalFaltaJustificativa = totalFaltaJustificativa;

          this.atividadesGerais.forEach(atividade => {
            atividade.valor = this.Atividades
              .filter(item => item.name === atividade.nome)
              .reduce((total, item) => total + item.value, 0);
          });
        }

        Atividades: any[] = [
          { name: 'Frete', value: 5 },
          { name: 'Instalação Completa', value: 2 },
          { name: 'Risco Instalação', value: 1 },
          { name: 'Amarro Saquinhos', value: 7 },
          { name: 'Estria B', value: 33 },
          { name: 'Estria N', value: 55 },
        ];

        atividadesNaoRealizadas: any[] = [
          { name: 'Estria V', value: 0 },
          { name: 'Estria L', value: 0 },
          { name: 'Diária Revisão', value: 0 },
          { name: 'Risco', value: 0 },
          { name: 'Levantamento', value: 0 },
          { name: 'Coleta 25', value: 0 },
          { name: 'Coleta 30', value: 0 },
          { name: 'Diária Normal', value: 0 },
          { name: 'Diária Chuva', value: 0 },
          { name: 'Diária Feriado', value: 0 },
          { name: 'Raspa B', value: 0 },
          { name: 'Raspa N', value: 0 },
          { name: 'Raspa V', value: 0 },
          { name: 'Carregamento', value: 0 },
          { name: 'Falta Justificativa', value: 0 },
          { name: 'Falta', value: 0 },

        ];

        Faltas: any[] = [
          { titulo: 'Total de Faltas', valor: 0 },
          { titulo: 'Total de Frete', valor: 0 },
          { titulo: 'Total de Faltas com Justificativa', valor: 0 },
        ];

        atividadesGerais: any[] = [
          { nome: 'Levantamento', valor: 0 },
          { nome: 'Risco', valor: 0 },
          { nome: 'Risco Instalação', valor: 0 },
          { nome: 'Instalação Completa', valor: 0 },
          { nome: 'Amarro Saquinhos', valor: 0 },
          { nome: 'Diária Revisão', valor: 0 },
          { nome: 'Diária Normal', valor: 0 },
          { nome: 'Diária Chuva', valor: 0 },
          { nome: 'Diária Feriado', valor: 0 },
        ];              

      }
