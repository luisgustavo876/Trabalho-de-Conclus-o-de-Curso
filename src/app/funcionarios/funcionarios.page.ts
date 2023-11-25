import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage  {

  data_atual: any;
  data = {
    dia: moment().format('DD'),
    mes: moment().format('MMMM'),
    ano: moment().format('YYYY'),
  };
  Quinzena: any;
  totalFaltas: any;
  totalFaltaJustificativa: any;
  totalFrete: any;

  constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.form = this.formBuilder.group({});

    this.data_atual = moment().format('MMMM DD YYYY, h:mm:ss a');
    this.setQuinzena();
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

  selectedQuinzena: string = 'quinzena1'; // Defina a quinzena inicial
  Atividades: any[] = [
    { name: 'Frete', value: 5 },
    { name: 'Instalação Completa', value: 2 },
    { name: 'Risco Instalação', value: 1 },
    { name: 'Amarro Saquinhos', value: 7 },
    { name: 'Estria B', value: 33 },
    { name: 'Estria N', value: 55 },
  ];

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  funcionarioSelecionado: string = 'Matheus'; // Inicialize com o primeiro funcionário
  mostrarSegmentFuncionario: boolean = false; // Defina isso como false para ocultar o seletor
  funcionarios = ['cristiano', 'Henrique', 'marcelo', 'matheus', 'Renan'];

  selecionarFuncionario() {
    console.log('Funcionário selecionado:', this.funcionarioSelecionado);
  }

  async abrirSelectFuncionario() {
    // Código para abrir o seletor de funcionários
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
    // Adicione mais atividades não realizadas conforme necessário
  ];

  form: FormGroup;

  // Método para processar o envio do formulário
  saveData() {
    // Coletar dados do formulário, se houver campos adicionados ao formulário
    // Exemplo: const formData = this.form.value;

    // Processar os dados e salvar no banco de dados ou realizar ações necessárias
    // Substitua o console.log pelo código real para salvar os dados

    console.log('Dados a serem salvos:', this.Atividades);

    // Fechar o modal após o envio dos dados
    this.setOpen(false);
  }

  ionViewWillEnter() {
    // Chama a função calcularTotais para calcular os totais
    this.calcularTotais();
  }

  calcularTotais() {
    // Cálculos para Faltas, Frete e Faltas com Justificativa
    const totalFaltas = this.Atividades
      .filter(atividade => atividade.name === 'Falta')
      .reduce((total, atividade) => total + atividade.value, 0);

    const totalFrete = this.Atividades
      .filter(atividade => atividade.name === 'Frete')
      .reduce((total, atividade) => total + atividade.value, 0);

    const totalFaltaJustificativa = this.Atividades
      .filter(atividade => atividade.name === 'Falta Justificativa')
      .reduce((total, atividade) => total + atividade.value, 0);

    // Atualize outras informações gerais conforme necessário
    this.totalFaltas = totalFaltas;
    this.totalFrete = totalFrete;
    this.totalFaltaJustificativa = totalFaltaJustificativa;

    // Cálculos para atividades gerais
    this.atividadesGerais.forEach(atividade => {
      atividade.valor = this.Atividades
        .filter(item => item.name === atividade.nome)
        .reduce((total, item) => total + item.value, 0);
    });
  }

  Faltas: any[] = [
    { titulo: 'Total de Faltas', valor: 0 },
    { titulo: 'Total de Frete', valor: 0 },
    { titulo: 'Total de Faltas com Justificativa', valor: 0 },
    // Adicione mais informações gerais conforme necessário
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
    // Adicione mais atividades gerais conforme necessário
  ];

}
