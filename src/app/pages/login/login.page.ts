import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/auth.service';
import { CrudService } from '../../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService
  ) { }

  ngOnInit() {
  }
  passwordType: string = 'password';
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.passwordType = this.passwordVisible ? 'text' : 'password';
  }

  isLoading: boolean = false;
  nome_usuario: any;

  realizarLogin(dados: any) {
    this._authenticate.login(dados.email, dados.password);
  }

}
