import { Component } from '@angular/core';
import * as moment from 'moment';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {
  selectedYearVisible: boolean = true;
  selectedMonthVisible: boolean = false;
  selectedQuinzenaVisible: boolean = false;

  data_atual: any;
  data = {
    dia: moment().format('DD'),
    mes: moment().format('MMMM'),
    ano: moment().format('YYYY'),
  };
  Quinzena: any;
  selectedTimeUnit: string = 'ano'; // Inicialmente definido como 'ano'
  selectedYear: number = new Date().getFullYear();
  selectedMonth: string = moment().format('MMMM');
  selectedQuinzena: string = 'quinzena1';
  segmentVisivel: boolean = false; // Propriedade para controlar a visibilidade do ion-segment


  // Função para mostrar/ocultar o ion-segment
  toggleSegmentVisibility() {
    this.segmentVisivel = !this.segmentVisivel;
  }

  constructor( private popoverController: PopoverController ) {
    console.log(moment.locale());
    this.data_atual = moment().format('MMMM DD YYYY, h:mm:ss a');
    this.setQuinzena();
  }

  anoSelecionado() {
    this.selectedYearVisible = true;
    this.selectedMonthVisible = false;
    this.selectedQuinzenaVisible = false;
  }

  mesSelecionado() {
    this.selectedYearVisible = false;
    this.selectedMonthVisible = true;
    this.selectedQuinzenaVisible = false;
  }

  quinzenaSelecionada() {
    this.selectedYearVisible = false;
    this.selectedMonthVisible = false;
    this.selectedQuinzenaVisible = true;
  }

  anteriorAno() {
    this.selectedYear--;
    this.anoSelecionado();
  }

  proximoAno() {
    this.selectedYear++;
    this.anoSelecionado();
  }

  anteriorMes() {
    this.selectedMonth = moment(this.selectedMonth, 'MMMM').subtract(1, 'months').format('MMMM');
    this.mesSelecionado();
  }

  proximoMes() {
    this.selectedMonth = moment(this.selectedMonth, 'MMMM').add(1, 'months').format('MMMM');
    this.mesSelecionado();
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

  unidadeTempoSelecionada() {
    // Função a ser chamada quando a unidade de tempo é alterada
  }

  async abrirSelecaoUnidadeTempo() {
    console.log(this.abrirSelecaoUnidadeTempo())
    const popover = await this.popoverController.create({
      component: 'selecione-unidade-tempo-component',
      translucent: true,
      backdropDismiss: true,
    });
  
    await popover.present();
  
    const { data } = await popover.onWillDismiss();
  
    if (data && data.unidadeTempo) {
      this.selectedTimeUnit = data.unidadeTempo;
    }
  }
  
  








}


