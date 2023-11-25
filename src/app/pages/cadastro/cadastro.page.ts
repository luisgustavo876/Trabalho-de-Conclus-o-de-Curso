import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from 'src/app/services/message.service';


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
    private _message: MessageService
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

  criarConta(dados: any){
    console.log('email:' +dados.email);
    console.log('nome:' +  dados.name);
    this._authenticate.register(dados.email, dados.password);
    this._authenticate.register(dados.name, dados.tel)
  }
}
