import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from 'src/app/services/message.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService,  // Adicione uma vírgula aqui
  ) { }
  

  ngOnInit() {
  }

  dados: any = {
    name: '',
    email: '',
    password: ''
  };

  passwordType: string = 'password';
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.passwordType = this.passwordVisible ? 'text' : 'password';
  }

  criarConta(dados: any) {
    console.log('email:' + dados.email);
    console.log('nome:' + dados.name);

    this._authenticate.register(dados.email, dados.password)
      .then(() => {
        // Chama o método de sucesso no serviço de autenticação
        this._authenticate.showSuccessAlert();
        // Agora, vamos criar e exibir o alerta programaticamente

      })
      .catch((error: any) => {
        // Trata erros, se necessário
      });
  }
}
