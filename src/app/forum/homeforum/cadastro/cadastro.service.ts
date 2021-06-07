import { environment } from '../../../../environments/environment';
import { NewUser } from './novo-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = environment.ApiUrl;

@Injectable()

export class CadastroService {

  constructor(private http: HttpClient) {}

  ChecaSeTemEmail(email: string) {

    return this.http.get(API_URL + '/usuario/existe/' + email);

  }

  Cadastro(newUser: NewUser) {
    return this.http.post(API_URL + '/usuario/cadastro', newUser);
  }

  EsqueciSenha(email) {
    return this.http.post(API_URL + '/usuario/esqueci/', email);
  }

  MudarSenha(token, senha) {
    return this.http.post(API_URL + `/usuario/muda-senha/${token}`, senha);
  }

}
